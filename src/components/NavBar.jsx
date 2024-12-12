import React from "react";
import { useState } from "react";

const NavBar = () => {
  const tabs = ["Home", "About", "Projects", "Contact"];
  const [activeTab, setActiveTab] = useState("Home");

  const handleClick = (tab) => {
    setActiveTab(tab);
    const section = document.getElementById(tab);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav>
      <ul>
        {tabs.map((tab) => (
          <li key={tab}>
            <a href={"#" + tab}>{tab}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;


//   return (
//     <nav>
//       <ul className="nav-list">
//         {tabs.map((tab) => (
//           <li key={tab}>
//             <a
//               href={"#" + tab}
//               className={activeTab === tab ? "nav-link active" : "nav-link"}
//               onClick={() => handleClick(tab)}
//             >
//               {tab}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default NavBar;
