import React from "react";
import { useNavigate } from "react-router-dom";
import css from "./PrivacyPolicy.module.css";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className={css.privacyPage}>
        <div className={css.breadcrumb}>
          <button onClick={() => navigate(-1)} className={css.backButton}>
            ← BACK
          </button>
          <span className={css.breadcrumbSeparator}>/</span>
          <span className={css.breadcrumbText}>PRIVACY POLICY</span>
        </div>

        <div className={css.header}>
          <h1 className={css.title}>PRIVACY POLICY</h1>
          <p className={css.lastUpdated}>Last updated: February 2025</p>
        </div>

        <div className={css.content}>
          <section className={css.section}>
            <h2 className={css.sectionTitle}>1. INFORMATION WE COLLECT</h2>
            <p className={css.sectionText}>
              We collect information you provide directly to us when you create an account, 
              make a purchase, or communicate with us. This may include:
            </p>
            <ul className={css.list}>
              <li>Personal identification information (Name, email address, phone number)</li>
              <li>Shipping and billing addresses</li>
              <li>Payment information (processed securely through our payment providers)</li>
              <li>Purchase history and preferences</li>
              <li>Communications with our customer service team</li>
            </ul>
          </section>

          <section className={css.section}>
            <h2 className={css.sectionTitle}>2. HOW WE USE YOUR INFORMATION</h2>
            <p className={css.sectionText}>
              We use the information we collect to:
            </p>
            <ul className={css.list}>
              <li>Process your orders and manage your account</li>
              <li>Provide customer support and respond to your inquiries</li>
              <li>Send you technical notices, updates, and security alerts</li>
              <li>Personalize your shopping experience and provide product recommendations</li>
              <li>Communicate with you about products, services, and promotions</li>
              <li>Detect, prevent, and address technical issues and fraud</li>
            </ul>
          </section>

          <section className={css.section}>
            <h2 className={css.sectionTitle}>3. INFORMATION SHARING</h2>
            <p className={css.sectionText}>
              We do not sell your personal information to third parties. We may share 
              your information with:
            </p>
            <ul className={css.list}>
              <li>Service providers who perform services on our behalf (shipping, payment processing)</li>
              <li>Professional advisors (lawyers, bankers, auditors)</li>
              <li>Law enforcement or government authorities when required by law</li>
              <li>Third parties in connection with a business transaction (merger, acquisition)</li>
            </ul>
          </section>

          <section className={css.section}>
            <h2 className={css.sectionTitle}>4. COOKIES AND TRACKING TECHNOLOGIES</h2>
            <p className={css.sectionText}>
              We use cookies and similar tracking technologies to track activity on our 
              website and hold certain information. Cookies are files with a small amount 
              of data which may include an anonymous unique identifier.
            </p>
            <p className={css.sectionText}>
              You can instruct your browser to refuse all cookies or to indicate when a 
              cookie is being sent. However, if you do not accept cookies, you may not be 
              able to use some portions of our service.
            </p>
          </section>

          <section className={css.section}>
            <h2 className={css.sectionTitle}>5. DATA SECURITY</h2>
            <p className={css.sectionText}>
              The security of your data is important to us. We implement appropriate 
              technical and organizational measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <p className={css.sectionText}>
              However, no method of transmission over the Internet or electronic storage 
              is 100% secure. While we strive to use commercially acceptable means to 
              protect your personal information, we cannot guarantee its absolute security.
            </p>
          </section>

          <section className={css.section}>
            <h2 className={css.sectionTitle}>6. YOUR RIGHTS</h2>
            <p className={css.sectionText}>
              You have the right to:
            </p>
            <ul className={css.list}>
              <li>Access and receive a copy of your personal data</li>
              <li>Rectify or update your personal data</li>
              <li>Request deletion of your personal data</li>
              <li>Restrict or object to the processing of your data</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className={css.sectionText}>
              To exercise these rights, please contact us at privacy@di-style.com.
            </p>
          </section>

          <section className={css.section}>
            <h2 className={css.sectionTitle}>7. DATA RETENTION</h2>
            <p className={css.sectionText}>
              We will retain your personal information only for as long as is necessary 
              for the purposes set out in this Privacy Policy. We will retain and use 
              your information to the extent necessary to comply with our legal obligations, 
              resolve disputes, and enforce our policies.
            </p>
          </section>

          <section className={css.section}>
            <h2 className={css.sectionTitle}>8. CHILDREN'S PRIVACY</h2>
            <p className={css.sectionText}>
              Our service does not address anyone under the age of 16. We do not knowingly 
              collect personally identifiable information from anyone under the age of 16. 
              If you are a parent or guardian and you are aware that your child has provided 
              us with personal data, please contact us.
            </p>
          </section>

          <section className={css.section}>
            <h2 className={css.sectionTitle}>9. CHANGES TO THIS POLICY</h2>
            <p className={css.sectionText}>
              We may update our Privacy Policy from time to time. We will notify you of any 
              changes by posting the new Privacy Policy on this page and updating the 
              "Last updated" date.
            </p>
            <p className={css.sectionText}>
              You are advised to review this Privacy Policy periodically for any changes. 
              Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </section>

          <section className={css.section}>
            <h2 className={css.sectionTitle}>10. CONTACT US</h2>
            <p className={css.sectionText}>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className={css.contactInfo}>
              <p><strong>Email:</strong> privacy@di-style.com</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Address:</strong> 123 Fashion Avenue, New York, NY 10001</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;