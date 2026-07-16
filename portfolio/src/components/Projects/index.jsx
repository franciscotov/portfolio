import React from "react";
import styles from "./styles.module.scss";
import data from "../../projects.json";
import { useTranslation } from "react-i18next";
import { translationKeys, translationModulesKeys } from "@/Int/constants";
import countriesApp from "@/assets/img/countriesApp.jpg";
import { languagesKeys } from "@/components/common/constants";

const mediaAssets = {
  countriesApp,
};

const Projects = () => {
  const { t, i18n } = useTranslation([translationModulesKeys.Porfolio]);
  const { porfolio } = translationKeys;
  const isInEnglish = i18n.language === languagesKeys.en;
  const projects = isInEnglish ? data[0] : data[1];
  const intro = isInEnglish
    ? "Selected product work with a stronger focus on UX, integrations, and clean execution."
    : "Selección de proyectos con foco en UX, integraciones y una ejecución visual más cuidada.";

  return (
    <section className={styles.container} id="Portfolio">
      <div className={styles.header}>
        <span className={styles.kicker}>Portfolio</span>
        <h1>{t(porfolio.title)}</h1>
        <p className={styles.intro}>{intro}</p>
      </div>
      <div className={styles.grid}>
        {projects.map((project, index) => {
          const isVideo = project.mediaType === "video";
          const isImage = project.mediaType === "image";
          const cardClassName = [
            styles.card,
            index % 2 === 1 ? styles.cardReverse : "",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <article className={cardClassName} key={project.name}>
              <div className={styles.content}>
                <div className={styles.badgeRow}>
                  <span className={styles.badge}>{project.category}</span>
                </div>

                <h2>{project.name}</h2>
                <p className={styles.description}>{project.description}</p>

                <div className={styles.techList}>
                  {project.techs.map((tech) => (
                    <span className={styles.techChip} key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={styles.actions}>
                  {project.deploy ? (
                    <a
                      className={styles.primaryAction}
                      href={project.deploy}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t(porfolio.demo)}
                    </a>
                  ) : null}
                  <a
                    className={styles.secondaryAction}
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t(porfolio.repository)}
                  </a>
                </div>
              </div>

              <div className={styles.media}>
                {isVideo ? (
                  <video
                    className={styles.mediaAsset}
                    controls
                    playsInline
                    preload="metadata"
                  >
                    <source src={project.video} type="video/mp4" />
                  </video>
                ) : isImage ? (
                  <img
                    className={styles.mediaAsset}
                    src={mediaAssets[project.mediaKey]}
                    alt={project.mediaAlt || project.name}
                  />
                ) : (
                  <div className={styles.panel}>
                    <span>{project.panelLabel}</span>
                    <strong>{project.panelTitle}</strong>
                    <p>{project.panelCopy}</p>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
