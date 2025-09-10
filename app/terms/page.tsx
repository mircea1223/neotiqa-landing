import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms and Conditions - ExtensionAI",
  description: "Terms and conditions for ExtensionAI AI-powered home extension visualisation platform",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link
              href="/"
              className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
            >
              ← Back to Home
            </Link>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Terms and Conditions</h1>
          <p className="text-foreground/70 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="prose prose-lg max-w-none text-foreground">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4 text-foreground/80">
                By accessing and using ExtensionAI ("the Service"), you accept and agree to be bound by the terms and provision of this agreement.
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Service</h2>
              <p className="mb-4 text-foreground/80">
                ExtensionAI provides AI-powered home extension visualisation services that allow users to upload property photos
                and generate realistic visualisations of potential extensions, conservatories, orangeries, and verandas.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Account and Registration</h2>
              <p className="mb-4 text-foreground/80">
                To access certain features of the Service, you may be required to register for an account. You agree to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-foreground/80">
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain and update your information to keep it accurate and current</li>
                <li>Maintain the security of your password and account</li>
                <li>Accept responsibility for all activities that occur under your account</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Acceptable Use</h2>
              <p className="mb-4 text-foreground/80">You agree not to use the Service to:</p>
              <ul className="list-disc pl-6 mb-4 text-foreground/80">
                <li>Upload images that you do not own or have permission to use</li>
                <li>Generate visualisations for illegal or unauthorised purposes</li>
                <li>Violate any applicable local, state, national, or international law</li>
                <li>Transmit any material that infringes upon intellectual property rights</li>
                <li>Use the service for commercial purposes without proper licensing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Intellectual Property</h2>
              <p className="mb-4 text-foreground/80">
                The Service and its original content, features, and functionality are owned by NEOTIQA and are protected by
                international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. User Content</h2>
              <p className="mb-4 text-foreground/80">
                You retain ownership of images you upload. By uploading content, you grant us a limited license to process
                and generate visualisations. We do not claim ownership of your uploaded images.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Privacy</h2>
              <p className="mb-4 text-foreground/80">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Service Availability</h2>
              <p className="mb-4 text-foreground/80">
                We strive to maintain high service availability but do not guarantee uninterrupted access.
                The service may be temporarily unavailable due to maintenance, updates, or technical issues.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Limitation of Liability</h2>
              <p className="mb-4 text-foreground/80">
                In no event shall NEOTIQA be liable for any indirect, incidental, special, consequential, or punitive damages,
                including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Termination</h2>
              <p className="mb-4 text-foreground/80">
                We may terminate or suspend your account and access to the Service immediately, without prior notice,
                for any reason whatsoever, including breach of these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Changes to Terms</h2>
              <p className="mb-4 text-foreground/80">
                We reserve the right to modify these terms at any time. We will notify users of any material changes
                via email or through the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Contact Information</h2>
              <p className="mb-4 text-foreground/80">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <ul className="list-disc pl-6 mb-4 text-foreground/80">
                <li>By email: legal@neotiqa.com</li>
                <li>By post: 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}