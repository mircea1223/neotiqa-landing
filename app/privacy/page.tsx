import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy - ExtensionAI",
  description: "Privacy policy for ExtensionAI AI-powered home extension visualization platform",
}

export default function PrivacyPage() {
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
          
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
          <p className="text-foreground/70 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="prose prose-lg max-w-none text-foreground">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
              <p className="mb-4 text-foreground/80">
                NEOTIQA ("we," "our," or "us") operates ExtensionAI (the "Service"). This page informs you of our policies
                regarding the collection, use, and disclosure of personal information when you use our Service.
              </p>
              <p className="mb-4 text-foreground/80">
                We use your Personal Information only for providing and improving the Service. By using the Service,
                you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">Personal Information</h3>
              <p className="mb-4 text-foreground/80">
                While using our Service, we may ask you to provide us with certain personally identifiable information
                that can be used to contact or identify you. This may include:
              </p>
              <ul className="list-disc pl-6 mb-4 text-foreground/80">
                <li>Email address</li>
                <li>First and last name</li>
                <li>Company name</li>
                <li>Phone number</li>
                <li>Business information</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">Usage Data</h3>
              <p className="mb-4 text-foreground/80">
                We may collect information about how the Service is accessed and used. This may include:
              </p>
              <ul className="list-disc pl-6 mb-4 text-foreground/80">
                <li>Your computer's Internet Protocol (IP) address</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent</li>
                <li>Unique device identifiers</li>
                <li>Operating system</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">Image Data</h3>
              <p className="mb-4 text-foreground/80">
                When you upload images for visualization processing, we temporarily store and process these images
                to generate AI-powered visualizations. We do not retain uploaded images longer than necessary
                for service delivery.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="mb-4 text-foreground/80">We use the collected information for various purposes:</p>
              <ul className="list-disc pl-6 mb-4 text-foreground/80">
                <li>To provide and maintain our Service</li>
                <li>To process your visualization requests</li>
                <li>To notify you about changes to our Service</li>
                <li>To provide customer support</li>
                <li>To gather analysis to improve our Service</li>
                <li>To monitor usage and detect technical issues</li>
                <li>To send you marketing communications (with your consent)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Information Sharing and Disclosure</h2>
              <p className="mb-4 text-foreground/80">
                We do not sell, trade, or otherwise transfer your personal information to third parties except
                in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-4 text-foreground/80">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect and defend our rights or property</li>
                <li>To prevent or investigate possible wrongdoing</li>
                <li>With service providers who assist in our operations (under strict confidentiality)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Security</h2>
              <p className="mb-4 text-foreground/80">
                We implement appropriate technical and organizational security measures to protect your personal
                information against unauthorized access, alteration, disclosure, or destruction. However, no method
                of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Data Retention</h2>
              <p className="mb-4 text-foreground/80">
                We retain personal information only for as long as necessary to fulfill the purposes outlined in this
                Privacy Policy. Uploaded images are automatically deleted after processing unless you explicitly
                request otherwise.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Your Rights</h2>
              <p className="mb-4 text-foreground/80">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 mb-4 text-foreground/80">
                <li>Access your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Delete your personal information</li>
                <li>Object to processing of your information</li>
                <li>Request data portability</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Cookies and Tracking</h2>
              <p className="mb-4 text-foreground/80">
                We use cookies and similar tracking technologies to track activity on our Service and store certain
                information. You can instruct your browser to refuse all cookies or indicate when a cookie is being sent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Third-Party Services</h2>
              <p className="mb-4 text-foreground/80">
                Our Service may contain links to third-party websites or services. We are not responsible for the
                privacy practices of these third parties. We encourage you to read their privacy policies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. International Data Transfers</h2>
              <p className="mb-4 text-foreground/80">
                Your information may be transferred to and maintained on computers located outside of your jurisdiction
                where data protection laws may differ. We ensure appropriate safeguards are in place.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Children's Privacy</h2>
              <p className="mb-4 text-foreground/80">
                Our Service is not intended for children under 13. We do not knowingly collect personal information
                from children under 13. If you become aware that a child has provided us with personal information,
                please contact us immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Changes to This Privacy Policy</h2>
              <p className="mb-4 text-foreground/80">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting
                the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">13. Contact Us</h2>
              <p className="mb-4 text-foreground/80">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="list-disc pl-6 mb-4 text-foreground/80">
                <li>By email: privacy@neotiqa.com</li>
                <li>Through our contact form on the website</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}