import React from "react";
import styles from "./styles.module.scss";
import data from "../../projects.json";
import { useTranslation } from "react-i18next";
import { translationKeys, translationModulesKeys } from "@/Int/constants";
import { languagesKeys, sectionKeys } from "@/components/common/constants";

const mediaAssets = {
  countriesApp: '/',
};

const formatList = (items, language) => {
  const unique = [...new Set(items)];
  if (typeof Intl !== "undefined" && Intl.ListFormat) {
    return new Intl.ListFormat(language, { type: "conjunction" }).format(unique);
  }
  return unique.join(", ");
};

const ProjectMedia = ({ project }) => {
  if (project.mediaType === "video") {
    return (
      <video
        className={styles.mediaAsset}
        controls
        playsInline
        preload="metadata"
        aria-label={project.name}
      >
        {/* #t shows a frame from a few seconds in, instead of a black box */}
        <source src={`${project.video}#t=4`} type="video/mp4" />
      </video>
    );
  }

  if (project.mediaType === "image") {
    return (
      <img
        className={styles.mediaAsset}
        src={mediaAssets[project.mediaKey]}
        alt={project.mediaAlt || project.name}
        loading="lazy"
      />
    );
  }

  // Projects without a recording get a title plate instead of a fake screenshot
  return (
    <div className={styles.plate}>
      <p className={styles.plateLabel}>{project.panelLabel}</p>
      <div>
        <p className={styles.plateTitle}>{project.panelTitle}</p>
        <p className={styles.plateCopy}>{project.panelCopy}</p>
      </div>
    </div>
  );
};

const Projects = () => {
  const { t, i18n } = useTranslation([translationModulesKeys.Porfolio]);
  const { porfolio } = translationKeys;
  const isInSpanish = i18n.language === languagesKeys.es;
  const projects = isInSpanish ? data[1] : data[0];

  return (
    <section
      className={styles.work}
      id={sectionKeys.work}
      aria-labelledby="work-title"
    >
      <header className={styles.header}>
        <h2 id="work-title">{t(porfolio.title)}</h2>
        <p className={styles.intro}>{t(porfolio.intro)}</p>
      </header>

      <ul className={styles.list}>
        {projects.map((project) => (
          <li className={styles.project} key={project.name}>
            <div className={styles.media}>
              <ProjectMedia project={project} />
            </div>

            <div className={styles.details}>
              <h3>{project.name}</h3>
              <p className={styles.category}>{project.category}</p>
              <p className={styles.description}>{project.description}</p>
              <p className={styles.stack}>
                {t(porfolio.builtWith, {
                  techs: formatList(project.techs, i18n.language),
                })}
              </p>

              <p className={styles.links}>
                {project.deploy ? (
                  <a href={project.deploy} target="_blank" rel="noreferrer">
                    {t(porfolio.demo)}
                    <span className="visually-hidden">
                      {" "}
                      {project.name} {t(porfolio.newTab)}
                    </span>
                  </a>
                ) : null}
                <a href={project.github} target="_blank" rel="noreferrer">
                  {t(porfolio.repository)}
                  <span className="visually-hidden">
                    {" "}
                    {project.name} {t(porfolio.newTab)}
                  </span>
                </a>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
