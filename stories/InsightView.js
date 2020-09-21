// @ntthuong

import React from 'react';
import { storiesOf } from '@storybook/react';
import { InsightView } from '@gooddata/sdk-ui-ext';
import { BackendProvider } from "@gooddata/sdk-ui";
import { WorkspaceProvider } from "@gooddata/sdk-ui";
import bearFactory, { ContextDeferredAuthProvider } from "@gooddata/sdk-backend-bear";
import { projectId as workspace } from "../src/constants";
import {Ldm, LdmExt} from "../src/ldm";

const backend = bearFactory().withAuthentication(new ContextDeferredAuthProvider());
const WRAPPER_STYLE = { width: 1000, height: 500 };

storiesOf('InsightViews/Combo chart', module)
    .add('Column-line', () => (
    <div style={WRAPPER_STYLE}>
        <h1>combo col+line 1PM,1SM,1date</h1>
        <BackendProvider backend={backend}>
            <WorkspaceProvider workspace={workspace}>
        <InsightView
            insight={Ldm.Insights.InsightView1}
            config = {{
                separators:{
                    thousand: ' ',
                    decimal: ';'
                 }
            }}
            
        />

        <h1>combo - col+line 2PM,1SM,1VB stack to percent, filter 1 value</h1>
        <InsightView
            insight={Ldm.Insights.InsightView2}
            locale = "de-DE"
        />

        <h1>combo - col+line 1PM,1SM,1VB NO data</h1>
        <InsightView
            insight={Ldm.Insights.InsightView3}
            locale = "fr-FR"
        />
        </WorkspaceProvider>  
                </BackendProvider>
    </div>  
    ))
    .add('Column-column', () => (
    <div style={WRAPPER_STYLE}>
        <h1>combo col+col 2PM,1SM,1VB stack to percent</h1>
        <BackendProvider backend={backend}>
            <WorkspaceProvider workspace={workspace}>
        <InsightView
            insight={Ldm.Insights.InsightView4}
        />

        <h1>combo col+col 2PM,1SM,1VB stack to percent, filter 1 value</h1>
        <InsightView
            insight={Ldm.Insights.InsightView5}
        />
</WorkspaceProvider>  
                </BackendProvider>
    </div>

        
));
