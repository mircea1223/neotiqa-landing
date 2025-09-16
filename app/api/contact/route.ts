import { NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'

// Get the database connection
const sql = neon(process.env.DATABASE_URL || '')

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, company, phone } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !company) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    try {
      // Create table if it doesn't exist
      await sql`
        CREATE TABLE IF NOT EXISTS contact_submissions (
          id SERIAL PRIMARY KEY,
          first_name VARCHAR(100) NOT NULL,
          last_name VARCHAR(100) NOT NULL,
          email VARCHAR(255) NOT NULL,
          company VARCHAR(255) NOT NULL,
          phone VARCHAR(50),
          status VARCHAR(50) DEFAULT 'new',
          notes TEXT,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `

      // Create indexes if they don't exist
      await sql`
        CREATE INDEX IF NOT EXISTS idx_contact_email ON contact_submissions(email)
      `
      await sql`
        CREATE INDEX IF NOT EXISTS idx_contact_status ON contact_submissions(status)
      `
      await sql`
        CREATE INDEX IF NOT EXISTS idx_contact_created ON contact_submissions(created_at DESC)
      `

      // Insert the new submission
      const result = await sql`
        INSERT INTO contact_submissions (
          first_name,
          last_name,
          email,
          company,
          phone
        ) VALUES (
          ${firstName},
          ${lastName},
          ${email},
          ${company},
          ${phone || null}
        )
        RETURNING id, created_at
      `

      console.log(`New contact submission saved with ID: ${result[0].id}`)

      // Optional: Send email notification to hello@neotiqa.com
      // You can integrate email services here

    } catch (dbError) {
      // If database is not configured, log the submission
      console.error('Database error:', dbError)
      console.log('Form submission (fallback):', {
        firstName,
        lastName,
        email,
        company,
        phone,
        timestamp: new Date().toISOString()
      })

      // Continue without failing - form still works
    }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your interest! We\'ll be in touch shortly.'
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Form submission error:', error)
    return NextResponse.json(
      { error: 'Failed to process your request. Please try again.' },
      { status: 500 }
    )
  }
}

// GET endpoint to retrieve submissions
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '50')
    const page = parseInt(searchParams.get('page') || '0')
    const status = searchParams.get('status')

    // Execute query based on status filter
    const result = status && status !== 'all'
      ? await sql`
          SELECT * FROM contact_submissions
          WHERE status = ${status}
          ORDER BY created_at DESC
          LIMIT ${limit} OFFSET ${page * limit}
        `
      : await sql`
          SELECT * FROM contact_submissions
          ORDER BY created_at DESC
          LIMIT ${limit} OFFSET ${page * limit}
        `

    // Get total count
    const countQuery = status && status !== 'all'
      ? await sql`SELECT COUNT(*) as count FROM contact_submissions WHERE status = ${status}`
      : await sql`SELECT COUNT(*) as count FROM contact_submissions`

    const totalCount = parseInt(countQuery[0].count)
    const hasMore = (page + 1) * limit < totalCount

    return NextResponse.json({
      submissions: result,
      count: result.length,
      totalCount,
      page,
      hasMore
    })

  } catch (error) {
    console.error('Failed to fetch submissions:', error)

    // Return empty array if database not configured
    return NextResponse.json({
      submissions: [],
      count: 0,
      error: 'Database not configured'
    })
  }
}

// DELETE endpoint to remove a submission
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const submissionId = searchParams.get('id')

    if (!submissionId) {
      return NextResponse.json(
        { error: 'Submission ID required' },
        { status: 400 }
      )
    }

    // Delete the submission
    const result = await sql`
      DELETE FROM contact_submissions
      WHERE id = ${submissionId}
      RETURNING id
    `

    if (result.length === 0) {
      return NextResponse.json(
        { error: 'Submission not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Submission deleted successfully'
    })

  } catch (error) {
    console.error('Failed to delete submission:', error)
    return NextResponse.json(
      { error: 'Failed to delete submission' },
      { status: 500 }
    )
  }
}

// PATCH endpoint to update submission status
export async function PATCH(request: Request) {
  try {
    const body = await request.json()
    const { id, status, notes } = body

    if (!id) {
      return NextResponse.json(
        { error: 'Submission ID required' },
        { status: 400 }
      )
    }

    // Update the submission
    const result = await sql`
      UPDATE contact_submissions
      SET
        status = ${status || 'new'},
        notes = ${notes || null},
        updated_at = CURRENT_TIMESTAMP
      WHERE id = ${id}
      RETURNING *
    `

    if (result.length === 0) {
      return NextResponse.json(
        { error: 'Submission not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      submission: result[0]
    })

  } catch (error) {
    console.error('Failed to update submission:', error)
    return NextResponse.json(
      { error: 'Failed to update submission' },
      { status: 500 }
    )
  }
}