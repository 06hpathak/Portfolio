import React from "react";

import styles from "./Certifications.module.css";
import { getImageUrl } from "../../utils";

export const Certifications = () => {
  return (
    <section className={styles.container} id="certifications">
      <h2 className={styles.title}>certifications</h2>
      <div className={styles.content}>
        
        <ul className={styles.certificationsItems}>
          <li className={styles.certificationsItem}>
          <img src={getImageUrl("certifications/badge.png")} alt="Badge icon" />
            
            <div className={styles.certificationsItemText}>
              
              <p>
              Qualified Internal Smart India Hackathon 2023.
              </p>
            </div>
          </li>
          <li className={styles.certificationsItem}>
          <img src={getImageUrl("certifications/badge.png")} alt="Badge icon" />
            
            <div className={styles.certificationsItemText}>
              
              <p>
              IBM Database and SQL for Data Science with Python (with Honors) by Coursera.

              </p>
            </div>
          </li>
          <li className={styles.certificationsItem}>
          <img src={getImageUrl("certifications/badge.png")} alt="Badge icon" />
            <div className={styles.certificationsItemText}>
              
              <p>
              SQL Certification by HackerRank.
              </p>
            </div>
          </li>
          <li className={styles.certificationsItem}>
          <img src={getImageUrl("certifications/badge.png")} alt="Badge icon" />
            <div className={styles.certificationsItemText}>
              
              <p>
              Master Class on Google Colab Machine Learning App by Perfect E Learning.
              </p>
            </div>
          </li>
          <li className={styles.certificationsItem}>
          <img src={getImageUrl("certifications/badge.png")} alt="Badge icon" />
            <div className={styles.certificationsItemText}>
            
              
              <p>
              Face Recognition Application Using Python by GUVI Geek Network, IITM Research Park.
              </p>
            </div>
          </li>
         
        </ul>
        <img
          src={getImageUrl("certifications/certificate.jpg")}
          alt="Me sitting with a laptop"
          className={styles.CertificationsImage}
        />
      </div>
    </section>
  );
};
