import Link from "next/link";
import styles from "./page.module.css";
import clsx from "clsx";

type LinkType = { href: string; text: string };

const russianLinks: LinkType[] = [
  { text: "Российские компании с наибольшим числом работников", href: "/online-table-chn" },
  { text: "Компании с высокой капитализацией — рынок акций России", href: "/model-portfolio-usa/" },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Портфели</h1>
      <h2 className={styles.h2}>Россия</h2>
      <ul className={clsx(styles.tableLinks)}>
        {russianLinks.map((link, i) => (
          <TableLink key={i} link={link} />
        ))}
      </ul>
    </main>
  );
}

const TableLink: React.FC<{ link: LinkType }> = ({ link }) => (
  <li className={styles.tableLinkContainer}>
    <Link className={styles.tableLink} href={link.href}>
      {link.text}
    </Link>
  </li>
);
