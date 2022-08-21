import React, { useState } from "react";
import { Plate, createPlugins } from "@udecode/plate-core";
import { MentionElement } from "@udecode/plate-mention-ui";
import { MdOpenInNew } from "react-icons/md";
// import { createMentionPlugin } from "./plugins/mention/createMentionPlugin";
import { createComboboxPlugin } from "@udecode/plate-combobox";

const editableProps = {
  placeholder: "Type…",
  style: {
    padding: "15px"
  }
};

function App() {
  const [debugValue, setDebugValue] = useState<any[]>([]);
  const emptyItems = [{ key: 0, text: "No Mentions Available" }];

  const plugins = createPlugins(
    [
      createComboboxPlugin()
      // createMentionPlugin({
      //   key: "/",
      //   component: MentionElement,
      //   props: (editor) => {
      //     const onMentionClicked = () => {
      //       let url = editor.element.url;
      //       console.log("Opening url", url);
      //       window.open(url, "_blank");
      //     };

      //     const renderLabel = (element) => {
      //       return (
      //         <div
      //           title={element.url}
      //           style={{ display: "flex", cursor: "pointer" }}
      //         >
      //           {element.value}
      //           <MdOpenInNew size={15} />
      //         </div>
      //       );
      //     };

      //     return {
      //       onClick: onMentionClicked,
      //       renderLabel: renderLabel
      //     };
      //   },
      //   options: {
      //     trigger: "/",
      //     createMentionNode: (item) => {
      //       return {
      //         id: item.key,
      //         value: item.text,
      //         url: item.data.url
      //       };
      //     }
      //   }
      // })
    ],
    {
      // components: createPlateUI()
    }
  );

  return (
    <>
      <Plate
        editableProps={editableProps}
        plugins={plugins}
        onChange={(newValue) => {
          setDebugValue(newValue);
        }}
      >
        {/* <AsyncCombobox items={emptyItems} pluginKey="/" /> */}
      </Plate>
      <pre>{JSON.stringify(debugValue, null, 1)}</pre>
    </>
  );
}

export default App;
