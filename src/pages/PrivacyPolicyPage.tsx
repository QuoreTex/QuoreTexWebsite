import Layout from "@/components/layout/Layout";
import { useEffect } from "react";

const PrivacyPolicyPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Layout hideFooter>
      <div className="bg-white min-h-screen pt-20">
        <div className="max-w-3xl mx-auto px-6 py-10">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center">
              [PRIVACY POLICY]
            </h1>
            <div className="w-24 h-1 bg-gray-900 mx-auto mt-4"></div>
          </div>
          <p className="text-gray-600 text-sm mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-8">
            <section>
              <h1 className="text-xl font-semibold text-gray-900 mb-4">
                👋 Introduction
                
              </h1>
              <div className="text-gray-700 space-y-4">
                <p>
                  Hey there! We're QuoreTex Technologies, and we want to be super
                  clear about how we handle your information. Here's what you need
                  to know about our privacy practices.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium mb-2">Quick Contact:</p>
                  <ul className="space-y-1">
                    <li>📍 Tulsi Pearl Apartment, Amravati, Maharashtra, India</li>
                    <li>📧 info@quoretex.com</li>
                    <li>🌐 www.quoretex.com</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                📱 What Information We Collect
              </h2>
              <div className="text-gray-700 space-y-4">
                <h3 className="font-medium">Personal Info:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Your name and contact details</li>
                  <li>Payment information (when needed)</li>
                  <li>Messages you send us</li>
                  <li>Your device information</li>
                </ul>

                <h3 className="font-medium mt-6">Automatic Info:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Cookies (to make our site work better)</li>
                  <li>How you use our website</li>
                  <li>Device type and browser info</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                🎯 How We Use Your Information
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>We use your information to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Provide our awesome services to you</li>
                  <li>Keep our website running smoothly</li>
                  <li>Send you important updates</li>
                  <li>Make our services even better</li>
                  <li>Keep things secure</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                🔒 Keeping Your Data Safe
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  We take your privacy seriously! We use industry-standard security
                  measures to protect your information. Think of it like a digital
                  vault - we use encryption, secure servers, and regular security
                  checks to keep your data safe.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                🍪 About Those Cookies
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Cookies help us make your experience better! They remember your
                  preferences and help us understand how people use our site. You can
                  always control cookie settings in your browser.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                📬 Get in Touch
              </h2>
              <div className="text-gray-700">
                <p>
                  Questions about privacy? We're here to help! Reach out to our
                  privacy team at:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                  <ul className="space-y-1">
                    <li>📧 privacy@quoretex.com</li>
                    <li>📞 +91 XXXXXXXXXX</li>
                    <li>✉️ Privacy Team, QuoreTex Technologies</li>
                    <li>📍 Tulsi Pearl Apartment, Amravati, Maharashtra, India</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicyPage;
