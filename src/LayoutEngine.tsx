import React from "react";

const LayoutEngine = () => {
  return (
    <div>
      <h3>layout engine</h3>
    </div>
  );
}
export default LayoutEngine;


// import { useEffect, useState } from "react";
// import AppSchemaProvider from "../lib/AppSchemaProvider";
// import { layoutDictionary } from "./layoutDictionary";
// import Dashboard from "./Dashboard";
// import Widget from "./Widget";
// import { unwrap } from "../lib/utils";
// import { Modal, Typography } from "@mui/material";
// import ModalForm from "./ModalForm";
// import { viewDictionary } from "./viewDictionary";

// interface LayoutEngineProps {
//   modelId: string | number;
//   layoutFactory: (componentName: string) => any;
//   viewFactory: (componentName: string) => any;
// }

// function LayoutEngine(props: LayoutEngineProps) {
//   const [layoutName, setLayoutName] = useState('defaultLayout');
//   const [layoutProps, setLayoutProps] = useState({});
//   const [viewName, setViewName] = useState('page');
//   const [viewProps, setViewProps] = useState({});
//   const [modelId, setModelId] = useState(props.modelId);

//   useEffect(() => {

//     const loadAppSchema = async () => {
//       //1. load app schema
//       const appSchema = await AppSchemaProvider.getAppSchema(props.modelId);
//       //2. update state
//       setViewName(appSchema.getInitialViewName());
//       setViewProps(appSchema.getViewProps(viewName));
      
//       setLayoutName(appSchema.getLayoutName(viewName));
//       setLayoutProps(appSchema.getLayoutProps(layoutName));

//     };

//     loadAppSchema();
//   }, [modelId]);

//   const Layout = props.layoutFactory(layoutName);
//   const View = props.viewFactory(viewName);

//   return (
//     <Layout {...layoutProps}>
//       <View {...viewProps}/>
//     </Layout>
//   );
// }

// // function LayoutEngine(props: LayoutEngineProps) {
// //   const [layoutName, setLayoutName] = useState('defaultLayout');
// //   const [viewName, setViewName] = useState('Page');
// //   const [appTitle, setAppTitle] = useState('');
// //   const [viewTitle, setViewTitle] = useState('');
// //   const [widgets, setWidgets] = useState<any[]>([]);
// //   const [modalOpen, setModalOpen] = useState<boolean>(false);
// //   const [modalTitle, setModalTitle] = useState('');
// //   const [modalContent, setModalContent] = useState<ReactFragment | undefined>(undefined);

// //   const Layout = layoutDictionary[layoutName];
// //   const View = viewDictionary[viewName];

// //   const toWidgetArray = (content: any, transitions: any): any[] => {
// //     const result = [];
// //     const transitionsDictionary: any = {};
// //     for (const transitionKey in transitions) {
// //       const transition = unwrap(transitions[transitionKey]);
// //       transitionsDictionary[transition.key] = transition.value;
// //     }

// //     for (const widgetKey in content) {
// //       const widget = content[widgetKey];
// //       if (!['form', 'widget'].includes(widget.entityType)) {
// //         continue;
// //       }
// //       if (widget.entity) {
// //         const entity = unwrap(widget.entity);
// //         result.push({
// //           key: entity.value.id,
// //           name: entity.value.name,
// //           content: JSON.stringify(entity),
// //           transition: transitionsDictionary[entity.key]
// //         });
// //       }
// //       else {
// //         result.push({
// //           key: widgetKey,
// //           name: widgetKey,
// //           content: JSON.stringify(widget)
// //         });
// //       }
// //     }
// //     return result;
// //   };

// //   function toggleModalForm(transition: any) {
// //     setModalOpen(!modalOpen);
// //     if (transition) {
// //       setModalTitle(transition.name || '');
// //       setModalContent(JSON.stringify(transition, null, 2));
// //     }
// //     else {
// //       setModalTitle('No title');
// //       setModalContent('No content');
// //     }
// //   }

// //   useEffect(() => {

// //     AppSchemaProvider.getAppSchema().then(appSchema => {
// //       const startViewSchema = appSchema.getStartViewSchema();
// //       const viewSchema = startViewSchema;
// //       const layoutName = viewSchema.value.layoutName || appSchema.layoutName || "layout1";
// //       setLayoutName(layoutName);
// //       setAppTitle(appSchema.config.name);
// //       setViewTitle(viewSchema.value.name);
// //       setWidgets(toWidgetArray(viewSchema.value.content, viewSchema.value.transitions))
// //     });

// //   }, []);

// //   if (Layout) {
// //     return (
// //       <Layout title={appTitle}>
// //         <Dashboard title={viewTitle}>
// //           {widgets.map(widget => {
// //             return (
// //               <div 
// //                 key={widget.key} 
// //                 onClick={() => toggleModalForm(widget.transition)}
// //               >
// //                 <Widget title={widget.name}>
// //                   <Typography>
// //                     {widget.content}
// //                   </Typography>
// //                 </Widget>
// //               </div>
// //             );
// //           })}
// //         </Dashboard>
// //         <Modal open={modalOpen} onClick={() => toggleModalForm(undefined)}>
// //           <ModalForm title={modalTitle}>
// //             <div>
// //               {modalContent}
// //             </div>
// //           </ModalForm>
// //         </Modal>
// //       </Layout>
// //     );
// //   }
// //   return (
// //     <p>Loading</p>
// //     // <View></View>
// //   );
// // }

// export default LayoutEngine;