"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useFadeIn } from "@/hooks/use-fade-in"

export function CTASection() {
  const headerFade = useFadeIn({ delay: 200 })
  const formFade = useFadeIn({ delay: 400 })

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required"
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }
    if (!formData.company.trim()) {
      newErrors.company = "Company name is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong")
      }

      // Success
      setSubmitStatus({
        type: "success",
        message: data.message || "Thank you! We'll be in touch soon.",
      })

      // Clear form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
      })
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: error instanceof Error
          ? error.message
          : "Failed to send your request. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <div className="w-full h-px bg-divider"></div>
      <section id="cta" className="py-12 sm:py-16 lg:py-20 bg-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div ref={headerFade.ref} style={headerFade.fadeInStyle} className="text-center mb-8 sm:mb-12">
              <h2 className="font-bold text-balance mb-4 sm:text-3xl text-foreground text-2xl">
                {"Are you ready to "}
                <span className="text-primary">Double</span>
                {" your "}
                <span className="text-primary">Conversion Rate?</span>
              </h2>
              <p className="text-pretty max-w-2xl mx-auto sm:text-base text-foreground px-4 sm:px-0 text-xs font-light">
                Get in touch to see how our AI platform can transform your business. Pricing adapted to your company's
                size and needs.
              </p>
            </div>

            <div className="max-w-lg mx-auto">
              <div ref={formFade.ref} style={formFade.fadeInStyle} className="space-y-6">
                <div className="bg-card rounded-lg p-4 sm:p-8 border border-border">
                  <h3 className="sm:text-xl font-semibold mb-3 sm:mb-6 text-primary text-base">Request a Demo</h3>

                  {submitStatus.type && (
                    <div
                      className={`mb-4 p-3 rounded-md text-sm ${
                        submitStatus.type === "success"
                          ? "bg-green-50 text-green-800 border border-green-200"
                          : "bg-red-50 text-red-800 border border-red-200"
                      }`}
                    >
                      {submitStatus.message}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Input
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className={`dark:text-input-dark dark:placeholder-input-dark light:text-input-light light:placeholder-input-light text-xs ${
                            errors.firstName ? "border-red-500" : ""
                          }`}
                          placeholder="First Name"
                          required
                        />
                        {errors.firstName && (
                          <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>
                        )}
                      </div>
                      <div>
                        <Input
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className={`dark:text-input-dark dark:placeholder-input-dark light:text-input-light light:placeholder-input-light text-xs ${
                            errors.lastName ? "border-red-500" : ""
                          }`}
                          placeholder="Last Name"
                          required
                        />
                        {errors.lastName && (
                          <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>
                        )}
                      </div>
                    </div>
                    <div>
                      <Input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`dark:text-input-dark dark:placeholder-input-dark light:text-input-light light:placeholder-input-light text-xs ${
                          errors.email ? "border-red-500" : ""
                        }`}
                        placeholder="Company Email"
                        type="email"
                        required
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                      )}
                    </div>
                    <div>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className={`dark:text-input-dark dark:placeholder-input-dark light:text-input-light light:placeholder-input-light text-xs ${
                          errors.company ? "border-red-500" : ""
                        }`}
                        placeholder="Company Name"
                        required
                      />
                      {errors.company && (
                        <p className="mt-1 text-xs text-red-600">{errors.company}</p>
                      )}
                    </div>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="dark:text-input-dark dark:placeholder-input-dark light:text-input-light light:placeholder-input-light text-xs"
                      placeholder="Phone Number (Optional)"
                      type="tel"
                    />
                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Book a Demo"}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}