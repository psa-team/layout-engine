import React from "react";
import { useEffect, useState } from "react";
import AppSchemaProvider from "../lib/AppSchemaProvider";
import { LayoutEngineProps } from "./LayoutEngine.types";

function LayoutEngine(props: LayoutEngineProps) {
  const [layoutName, setLayoutName] = useState('defaultLayout');
  const [layoutProps, setLayoutProps] = useState({});
  const [viewName, setViewName] = useState('page');
  const [viewProps, setViewProps] = useState({});
  const [modelId, setModelId] = useState(props.modelId);

  useEffect(() => {

    const loadAppSchema = async () => {
      //1. load app schema
      const appSchema = await AppSchemaProvider.getAppSchema(props.modelId);
      //2. update state
      setViewName(appSchema.props.startView.key);
      setViewProps({context: appSchema.props.startView.value});
      
      setLayoutName(appSchema.props.defaultLayout.key);
      setLayoutProps({context: appSchema.props.defaultLayout.value});

    };

    loadAppSchema();
  }, [modelId]);

  const Layout = props.createLayout(layoutName);
  const View = props.createView(viewName);

  return (
    <Layout {...layoutProps}>
      <View {...viewProps}/>
    </Layout>
  );
}

export default LayoutEngine;