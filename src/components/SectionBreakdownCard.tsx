// src/components/SectionBreakdownCard.tsx
import type { DashboardData } from "@/types/dashboard";

type Props = {
  sectionBreakdown: DashboardData["sectionBreakdown"];
};

export function SectionBreakdownCard({ sectionBreakdown }: Props) {
  return (
    <section className="card">
      <h2 className="cardTitle">Section breakdown</h2>

      <div className="sectionBreakdown">
        <div className="sectionGroup">
          <div className="sectionGroupTitle">Math</div>
          <ul className="sectionList">
            {sectionBreakdown.math.map((item) => (
              <li className="sectionListItem" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="sectionGroup">
          <div className="sectionGroupTitle">Reading &amp; Writing</div>
          <ul className="sectionList">
            {sectionBreakdown.readingWriting.map((item) => (
              <li className="sectionListItem" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
