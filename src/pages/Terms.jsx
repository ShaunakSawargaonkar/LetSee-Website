/**
 * Terms and Conditions Page
 * Legal information and terms of service
 * WCAG 2.1 AA compliant
 */
export default function Terms() {
  return (
    <main id="main-content" className="w-full">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-primary-light to-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-dark-bg mb-4">
            Terms and Conditions
          </h1>
          <p className="text-lg text-dark-bg">
            Last updated: January 2026
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <article className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-dark-bg mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-dark-bg leading-relaxed">
              By accessing and using the Let's See website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-dark-bg mb-4">
              2. Use License
            </h2>
            <p className="text-dark-bg leading-relaxed mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on Let's See for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside text-dark-bg space-y-2">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose or for any public display</li>
              <li>Attempting to decompile or reverse engineer any software contained on the site</li>
              <li>Removing any copyright or other proprietary notations from the materials</li>
              <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-dark-bg mb-4">
              3. Disclaimer
            </h2>
            <p className="text-dark-bg leading-relaxed">
              The materials on Let's See are provided on an 'as is' basis. Let's See makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-dark-bg mb-4">
              4. Limitations
            </h2>
            <p className="text-dark-bg leading-relaxed">
              In no event shall Let's See or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Let's See.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-dark-bg mb-4">
              5. Accuracy of Materials
            </h2>
            <p className="text-dark-bg leading-relaxed">
              The materials appearing on Let's See could include technical, typographical, or photographic errors. Let's See does not warrant that any of the materials on the website are accurate, complete, or current. Let's See may make changes to the materials contained on the website at any time without notice.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-dark-bg mb-4">
              6. Links
            </h2>
            <p className="text-dark-bg leading-relaxed">
              Let's See has not reviewed all of the sites linked to the website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Let's See of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-dark-bg mb-4">
              7. Modifications
            </h2>
            <p className="text-dark-bg leading-relaxed">
              Let's See may revise these terms of service for the website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-dark-bg mb-4">
              8. Governing Law
            </h2>
            <p className="text-dark-bg leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which Let's See operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-bg mb-4">
              9. Contact Information
            </h2>
            <p className="text-dark-bg leading-relaxed">
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <div className="bg-primary-light p-6 rounded-lg mt-4">
              <p className="text-dark-bg font-semibold">Let's See</p>
              <p className="text-dark-bg">Email: legal@letsee.com</p>
              <p className="text-dark-bg">Website: www.letsee.com</p>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
