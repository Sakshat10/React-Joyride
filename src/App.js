import React, { useState } from "react";
import Joyride from "react-joyride";
// import "./App.css"; // Import your CSS file for custom styling

function App() {
  const [{ run, steps }, setState] = useState({
    run: true,
    steps: [
      {
        content: <h1>Let's begin</h1>,
        locale: { skip: <strong>Skip</strong> },
        placement: "center",
        target: "body"
      },
      {
        content: <h1>Hello world</h1>,
        placement: "bottom",
        target: "#initial",
        title: "Heading of the website"
      },
      {
        content: <h1>First step</h1>,
        placement: "bottom",
        target: "#step1",
        title: "Step one"
      },
      {
        content: <h1>Second step</h1>,
        placement: "bottom",
        target: "#step2",
        title: "Step two",
        locale: {
          next: "keep going"
        }
      },
      {
        content: <h1>Third step</h1>,
        placement: "bottom",
        target: "#step3",
        title: "Step three"
      },
      {
        content: <h1>Fourth step</h1>,
        placement: "bottom",
        target: "#step4",
        title: "Step four"
      }
    ]
  });

  return (
    <div className="bg-[#797979] h-screen flex flex-col justify-center items-center gap-10">
      <div>
      <h1 className="text-6xl" id="initial">Joyride Practice</h1>
      </div>
      <div className="flex gap-10">
      <Joyride
        callback={() => {}}
        run={run}
        steps={steps}
        hideCloseButton
        scrollToFisrtStep
        showSkipButton
        showProgress
        continuous
        styles={{
          options: {
            zIndex: 10000, // Ensure Joyride is above other elements
            arrowColor: '##979797', // Customize arrow color
            primaryColor: '#000', // Customize primary color
            backgroundColor: 'rgba(0, 0, 0, 0.8)', // Customize background color
            textColor: '#fff', // Customize text color
          }
        }}
        locale={{
          last: 'Finish' // Customize last button text
        }}
        />
      <div className="border-2 p-10 bg-red-500" id="step1"></div>
      <div className="border-2 p-10 bg-blue-400" id="step2"></div>
      <div className="border-2 p-10 bg-orange-500" id="step3"></div>
      <div className="border-2 p-10 bg-green-900" id="step4"></div>
        </div>
    </div>
  );
}

export default App;
