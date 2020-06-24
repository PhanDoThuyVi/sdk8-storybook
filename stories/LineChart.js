import React from 'react';
import { storiesOf } from '@storybook/react';
import '@gooddata/sdk-ui-charts/styles/css/main.css'; 
import { LineChart } from '@gooddata/sdk-ui-charts';
import { BackendProvider } from "@gooddata/sdk-ui";
import { WorkspaceProvider } from "@gooddata/sdk-ui";
import bearFactory, { ContextDeferredAuthProvider } from "@gooddata/sdk-backend-bear";
import { projectId as workspace } from "../src/constants";
import {Ldm, LdmExt} from "../src/ldm";

const backend = bearFactory().withAuthentication(new ContextDeferredAuthProvider());
const WRAPPER_STYLE = { width: 1000, height: 500 };

storiesOf('Line Chart', module)
    .add('Basic Line chart', () => (
    <div style={WRAPPER_STYLE}>
        <h1>Line chart 1M,1TB,1SB</h1>
        <BackendProvider backend={backend}>
        <WorkspaceProvider workspace={workspace}>
        <LineChart
            measures={[Ldm.m_ClosedBOP]}
            trendBy={Ldm.a_Product}
            segmentBy={Ldm.a_StageName}
            config={{
                dataLabels: {
                    visible: true
                }
            }}
        />

        <h1>Line chart 4M,1TB,filter 1 value</h1>
        <LineChart
            measures={[Ldm.m_ClosedBOP, Ldm.m_ClosedEOP, Ldm.m_SnapshotBOP, Ldm.m_SnapshotEOP]}
            trendBy={Ldm.a_Deparment}
            config={{
                dataLabels: {
                    visible: true
                }
            }}
            filters = {[LdmExt.filterDepartment]}
        />
        </WorkspaceProvider>  
                </BackendProvider>
    </div>
    ))
    .add('Dual line chart', () => (
    <div style={WRAPPER_STYLE}>
        <h1>Line chart 2L,1R,1TB</h1>
        <BackendProvider backend={backend}>
            <WorkspaceProvider workspace={workspace}>
        <LineChart
            measures={[Ldm.m_Amount, Ldm.m_AvgAmount, Ldm.m_AvgWon, LdmExt.m_MinAmount]}
            trendBy={Ldm.a_Department}
            config={{
                dualAxis: true,
                secondary_yaxis: {
                    measures: ['MinAmount']
                }
            }}
            filters = {[LdmExt.filterDepartment]}
        />
        <h1>Line chart 4M,1TB,filter 1 value</h1>
        <LineChart
            measures={[Ldm.m_ClosedBOP, LdmExt.m_ClosedEOP, Ldm.m_SnapshotBOP, LdmExt.m_SnapshotEOP]}
            trendBy={Ldm.a_YearClosed}
            config={{
                secondary_yaxis: {
                    measures: ['ClosedBOP','SnapshotBOP']
                },
                dataLabels: {
                    visible: true
                }
            }}
            //filters = {[filterDepartment]}
        />
        </WorkspaceProvider>  
                </BackendProvider>
        </div>
    ));
