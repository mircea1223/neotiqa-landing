import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'

export async function GET() {
  try {
    // Create the contact_submissions table
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

    // Create indexes for better query performance
    await sql`
      CREATE INDEX IF NOT EXISTS idx_contact_email ON contact_submissions(email)
    `

    await sql`
      CREATE INDEX IF NOT EXISTS idx_contact_status ON contact_submissions(status)
    `

    await sql`
      CREATE INDEX IF NOT EXISTS idx_contact_created ON contact_submissions(created_at DESC)
    `

    return NextResponse.json({
      success: true,
      message: 'Database tables and indexes created successfully!'
    })

  } catch (error) {
    console.error('Database setup error:', error)
    return NextResponse.json(
      {
        error: 'Failed to setup database',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}