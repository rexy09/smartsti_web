import { Image } from '@mantine/core';
import dashboard from "../assets/icons/dashboard.svg";
import opportunities from "../assets/icons/opportunities.svg";
import outputs from "../assets/icons/outputs.svg";
import ai from "../assets/icons/ai.svg";
import hub from "../assets/icons/hub.svg";
import report from "../assets/icons/report.svg";
import settings from "../assets/icons/settings.svg";
import logout from "../assets/icons/logout.svg";
import eve from "../assets/icons/eve.svg";
import close from "../assets/icons/close.svg";
import arrow_up from "../assets/icons/arrow-up.svg";
import arrow_down from "../assets/icons/arrow-down.svg";
import search_blue from "../assets/icons/search_blue.svg";
import search from "../assets/icons/search.svg";
import notification from "../assets/icons/notification.svg";
import chevron_down from "../assets/icons/chevron_down.svg";
import box from "../assets/icons/box.svg";
import box2 from "../assets/icons/box2.svg";
import info_circle from "../assets/icons/info_circle.svg";
import circle_arrow_right from "../assets/icons/circle_arrow_right.svg";
import circle_arrow_left from "../assets/icons/circle_arrow_left.svg";
import tools from "../assets/icons/tools.svg";
import filter from "../assets/icons/filter.svg";
import filter2 from "../assets/icons/filter2.svg";
import exportIcon from "../assets/icons/export.svg";
import point from "../assets/icons/point.svg";
import location from "../assets/icons/location.svg";
import arrow_right from "../assets/icons/arrow_right.svg";
import doc from "../assets/icons/doc.svg";
import empty from "../assets/icons/empty.svg";
import mou from "../assets/icons/mou.svg";
import research from "../assets/icons/research.svg";
import funding from "../assets/icons/funding.svg";
import calendar from "../assets/icons/calendar.svg";
import filter_lines from "../assets/icons/filter_lines.svg";
import save from "../assets/icons/save.svg";
import star from "../assets/icons/star.svg";
import date from "../assets/icons/date.svg";
import arrow_up_right from "../assets/icons/arrow_up_right.svg";
import published from "../assets/icons/published.svg";
import patent from "../assets/icons/patent.svg";
import project from "../assets/icons/project.svg";
import paper from "../assets/icons/paper.svg";
import university from "../assets/icons/university.svg";
import policies from "../assets/icons/policies.svg";
import education from "../assets/icons/education.svg";
import awards from "../assets/icons/awards.svg";
import innovation from "../assets/icons/innovation.svg";
import upcoming from "../assets/icons/upcoming.svg";
import agreement from "../assets/icons/agreement.svg";
import topic from "../assets/icons/topic.svg";
import overall from "../assets/icons/overall.svg";
import score from "../assets/icons/score.svg";


interface CustomIconProps {
  src: string;
  alt?: string;
};

const createCustomIcon = ({ src, alt }: CustomIconProps) => {
  return <Image src={src}  alt={alt} />
};
const rotatingIcon = ({ src }: CustomIconProps) => {
  return <>
    <Image src={src} style={{
      animation: 'spin 2s linear infinite',
      width: '24px', // Adjust as needed
      height: '24px', // Adjust as needed
    }} />
    <style>
      {`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
    </style>
  </>
};


export const Icons = {
  dashboard: createCustomIcon({ src: dashboard }),
  opportunities: createCustomIcon({ src: opportunities }),
  outputs: createCustomIcon({ src: outputs }),
  ai: createCustomIcon({ src: ai }),
  hub: createCustomIcon({ src: hub }),
  report: createCustomIcon({ src: report }),
  settings: createCustomIcon({ src: settings }),
  logout: createCustomIcon({ src: logout }),
  eve: rotatingIcon({ src: eve }),
  eve2: rotatingIcon({ src: eve }),
  close: createCustomIcon({ src: close }),
  arrow_up: createCustomIcon({ src: arrow_up }),
  arrow_down: createCustomIcon({ src: arrow_down }),
  search_blue: createCustomIcon({ src: search_blue }),
  search: createCustomIcon({ src: search }),
  notification: createCustomIcon({ src: notification}),
  chevron_down: createCustomIcon({ src: chevron_down }),
  box: createCustomIcon({ src: box }),
  info_circle: createCustomIcon({ src: info_circle }),
  circle_arrow_right: createCustomIcon({ src: circle_arrow_right }),
  circle_arrow_left: createCustomIcon({ src: circle_arrow_left }),
  tools: createCustomIcon({ src: tools }),
  filter: createCustomIcon({ src: filter }),
  point: createCustomIcon({ src: point }),
  location: createCustomIcon({ src: location }),
  arrow_right: createCustomIcon({ src: arrow_right }),
  box2: createCustomIcon({ src: box2 }),
  doc: createCustomIcon({ src: doc }),
  empty: createCustomIcon({ src: empty }),
  exportIcon: createCustomIcon({ src: exportIcon }),
  mou: createCustomIcon({ src: mou }),
  research: createCustomIcon({ src: research }),
  funding: createCustomIcon({ src: funding }),
  filter2: createCustomIcon({ src: filter2 }),
  calendar: createCustomIcon({ src: calendar }),
  filter_lines: createCustomIcon({ src: filter_lines }),
  star: createCustomIcon({ src: star }),
  save: createCustomIcon({ src: save }),
  date: createCustomIcon({ src: date }),
  arrow_up_right: createCustomIcon({ src: arrow_up_right }),
  published: createCustomIcon({ src: published }),
  project: createCustomIcon({ src: project }),
  paper: createCustomIcon({ src: paper }),
  university: createCustomIcon({ src: university }),
  patent: createCustomIcon({ src: patent }),
  policies: createCustomIcon({ src: policies }),
  education: createCustomIcon({ src: education }),
  awards: createCustomIcon({ src: awards }),
  innovation: createCustomIcon({ src: innovation }),
  upcoming: createCustomIcon({ src: upcoming }),
  agreement: createCustomIcon({ src: agreement }),
  topic: createCustomIcon({ src: topic }),
  overall: createCustomIcon({ src: overall }),
  score: createCustomIcon({ src: score }),
};
