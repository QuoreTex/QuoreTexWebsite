import Layout from "@/components/layout/Layout";
import { useEffect } from "react";

const TermsOfServicePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Layout hideFooter>
      <div className="bg-white min-h-screen pt-20">
        <div className="max-w-3xl mx-auto px-6 py-10">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center">
              [TERMS OF SERVICE]
            </h1>
            <div className="w-24 h-1 bg-gray-900 mx-auto mt-4"></div>
          </div>
          <p className="text-gray-600 text-sm mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                👋 Welcome!
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Thanks for choosing QuoreTex Technologies! These terms of
                  service explain the rules for using our services. By using our
                  services, you're agreeing to these terms, so please read them
                  carefully.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-medium text-blue-800">Quick Note:</p>
                  <p className="text-blue-700">
                    You need to be at least 18 years old to use our services.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                👤 Your Account
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>When you create an account with us, please:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Keep your login details safe</li>
                  <li>Give us accurate information</li>
                  <li>Let us know if something's wrong</li>
                  <li>Don't share your account with others</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                🤝 Using Our Services
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>Here's what you can (and can't) do:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="font-medium text-green-800 mb-2">✅ You Can:</p>
                    <ul className="list-disc pl-5 space-y-1 text-green-700">
                      <li>Use our services for your business</li>
                      <li>Share your feedback</li>
                      <li>Create awesome projects</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <p className="font-medium text-red-800 mb-2">❌ Please Don't:</p>
                    <ul className="list-disc pl-5 space-y-1 text-red-700">
                      <li>Copy or resell our services</li>
                      <li>Share private information</li>
                      <li>Do anything illegal</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                💳 Payments
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>About payments and billing:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>We'll always be clear about prices</li>
                  <li>Subscriptions renew automatically</li>
                  <li>You can cancel anytime</li>
                  <li>Refunds are handled case by case</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                📋 Changes to These Terms
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Sometimes we need to update these terms. When we do, we'll let
                  you know on our website. Keep an eye out for any changes!
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                📞 Need Help?
              </h2>
              <div className="text-gray-700">
                <p>Got questions? We're here for you! Get in touch:</p>
                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                  <ul className="space-y-1">
                    <li>📧 legal@quoretex.com</li>
                    <li>📞 +91 XXXXXXXXXX</li>
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

export default TermsOfServicePage;
