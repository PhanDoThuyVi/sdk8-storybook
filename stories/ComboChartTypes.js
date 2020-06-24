//ntthuong
import React from 'react';

import { storiesOf } from '@storybook/react';
import { ComboChart } from '@gooddata/sdk-ui-charts';
import '@gooddata/sdk-ui-charts/styles/css/main.css';
import { InsightView } from '@gooddata/sdk-ui-ext';
import { BackendProvider } from "@gooddata/sdk-ui";
import { WorkspaceProvider } from "@gooddata/sdk-ui";
import bearFactory, { ContextDeferredAuthProvider } from "@gooddata/sdk-backend-bear";
import { projectId as workspace } from "../src/constants";
import {Ldm, LdmExt} from "../src/ldm";

const backend = bearFactory().withAuthentication(new ContextDeferredAuthProvider());
const DOWNLOADER_ID = 'downloader';
const WRAPPER_STYLE = { width: 1000, height: 500 };

storiesOf('ComboChart/Other Combo types', module)
    .add('Column+column', () => (
    <div style={WRAPPER_STYLE}>
        <h1>1PM,  1SM, 1VB</h1>
        <BackendProvider backend={backend}>
<WorkspaceProvider workspace={workspace}>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP]}
            secondaryMeasures={[Ldm.m_SnapshotBOP]}
            viewBy={Ldm.a_Product}
            config={{
                secondaryChartType: 'column',
                dataLabels: {
                    visible: true
                }
            }}
        />

        <h1>1PM,  1SM, 1VB, filter 1 value</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP]}
            secondaryMeasures={[Ldm.m_SnapshotBOP]}
            viewBy={Ldm.a_Deparment}
            config={{
                secondaryChartType: 'column'
            }}
            filters = {[LdmExt.filterDepartment]}
        />

        <h1>2PM, 1SM, 1 date, filter 1 value</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP, Ldm.m_ClosedEOP]}
            secondaryMeasures={[Ldm.m_SnapshotBOP]}
            viewBy={Ldm.a_YearClosed}
            config={{
                secondaryChartType: 'column'
            }}
            filters = {[LdmExt.relativeDateYear]}
        />
        
        <h1>2PM,  2SM, 1 date</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP, Ldm.m_ClosedEOP]}
            secondaryMeasures={[Ldm.m_SnapshotBOP, Ldm.m_SnapshotEOP]}
            viewBy={Ldm.a_YearSnapshot}
            config={{
                secondaryChartType: 'column'
            }}
        />
        <h1>2PM,  2SM, 1 date, stack measures</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP, Ldm.m_ClosedEOP]}
            secondaryMeasures={[Ldm.m_SnapshotBOP, Ldm.m_SnapshotEOP]}
            viewBy={Ldm.a_YearSnapshot}
            config={{
                secondaryChartType: 'column',
                stackMeasures: true
            }}
        />
        
        <h1>2PM,  2SM, 1 date, stack to percent</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP, Ldm.m_ClosedEOP]}
            secondaryMeasures={[Ldm.m_SnapshotBOP, Ldm.m_SnapshotEOP]}
            viewBy={Ldm.a_YearSnapshot}
            config={{
                secondaryChartType: 'column',
                stackMeasuresToPercent: true
            }}
        />

        <h1>2PM,  2SM, 1 date, stack to percent, pos+neg values</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_Amount, Ldm.m_AvgAmount]}
            secondaryMeasures={[Ldm.m_AvgWon,LdmExt.m_MinAmount]}
            viewBy={Ldm.a_YearSnapshot}
            config={{
                secondaryChartType: 'column',
                stackMeasuresToPercent: true
            }}
        />

        <h1>2PM,  2SM, 1 date, stack measures, disabled dual</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_Amount, Ldm.m_AvgAmount]}
            secondaryMeasures={[Ldm.m_AvgWon,LdmExt.m_MinAmount]}
            viewBy={Ldm.a_YearSnapshot}
            config={{
                secondaryChartType: 'column',
                stackMeasures: true,
                dualAxis: false
            }}
        />

        <h1>2PM,  2SM, 1 date, set min-max</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_Amount, Ldm.m_AvgAmount]}
            secondaryMeasures={[Ldm.m_AvgWon, LdmExt.m_MinAmount]}
            viewBy={Ldm.a_YearClosed}
            config={{
                secondaryChartType: 'column',
                dataLabels: {
                    visible: true
                },
                secondary_yaxis: {
                    visible: true,
                    labelsEnabled: true,
                    min: '-100000',
                    rotation: "60"
                },
                yaxis: {
                    rotation: "60",
                    min: '400000'
                },
                xaxis: {
                    visible: true,
                    labelsEnabled: true,
                    rotation: '30'
                }
            }}
        />
</WorkspaceProvider>  
</BackendProvider>
    </div>
    ))
    .add('Column+line',() => (
    <div style={WRAPPER_STYLE}>
        <h1>1PM,  1SM, 1VB</h1>
        <BackendProvider backend={backend}>
<WorkspaceProvider workspace={workspace}>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP]}
            secondaryMeasures={[Ldm.m_SnapshotBOP]}
            viewBy={Ldm.a_Product}
            config={{
                dataLabels: {
                    visible: true
                }
            }}
        />

        <h1>1PM,  1SM, 1VB, filter 1 value</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP]}
            secondaryMeasures={[Ldm.m_SnapshotBOP]}
            viewBy={Ldm.a_Product}
            filters = {[LdmExt.filterProduct]}
        />

        <h1>2PM, 1SM, 1VB, filter 1 value</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_Amount, Ldm.m_AvgAmount]}
            secondaryMeasures={[LdmExt.m_MinAmount]}
            viewBy={Ldm.a_Product}
            filters = {[LdmExt.filterProduct,LdmExt.relativeDateYear]}
        />
        
        <h1>2PM,  2SM, 1 date</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP, Ldm.m_ClosedEOP]}
            secondaryMeasures={[Ldm.m_SnapshotBOP, Ldm.m_SnapshotEOP]}
            viewBy={Ldm.a_YearSnapshot}
        />

        <h1>2PM,  2SM, 1 date, stack measures</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP, Ldm.m_ClosedEOP]}
            secondaryMeasures={[Ldm.m_SnapshotBOP, Ldm.m_SnapshotEOP]}
            viewBy={Ldm.a_YearSnapshot}
            config={{
                stackMeasures: true
            }}
        />
        
        <h1>2PM,  2SM, 1 date, stack to percent</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP, Ldm.m_ClosedEOP]}
            secondaryMeasures={[Ldm.m_SnapshotBOP, Ldm.m_SnapshotEOP]}
            viewBy={Ldm.a_YearSnapshot}
            config={{
                stackMeasuresToPercent: true
            }}
        />

        <h1>2PM,  2SM, 1 date, stack to percent, pos+neg values</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_Amount, Ldm.m_AvgAmount]}
            secondaryMeasures={[Ldm.m_AvgWon, LdmExt.m_MinAmount]}
            viewBy={Ldm.a_YearSnapshot}
            config={{
                stackMeasuresToPercent: true
            }}
        />

        <h1>2PM,  2SM, 1 date, stack measures, disabled dual</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_Amount, Ldm.m_AvgAmount]}
            secondaryMeasures={[Ldm.m_AvgWon, LdmExt.m_MinAmount]}
            viewBy={Ldm.a_YearSnapshot}
            config={{
                stackMeasures: true,
                dualAxis: false
            }}
        />

        <h1>2PM,  2SM, 1 date, set min-max</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_Amount, Ldm.m_AvgAmount]}
            secondaryMeasures={[Ldm.m_AvgWon, Ldm.m_AmountBOP]}
            viewBy={Ldm.a_YearClosed}
            config={{
                dataLabels: {
                    visible: true
                },
                secondary_yaxis: {
                    visible: true,
                    labelsEnabled: true,
                    min: '800000',
                    rotation: "60"
                },
                yaxis: {
                    rotation: "60",
                    min: '400000'
                },
                xaxis: {
                    visible: true,
                    labelsEnabled: true,
                    rotation: '30'
                }
            }}
        />     
        </WorkspaceProvider>  
</BackendProvider>       
    </div>
    ))
    .add('Column+area', () => (
    <div style={WRAPPER_STYLE}>
        <h1>1PM,  1SM, 1VB</h1>
        <BackendProvider backend={backend}>
<WorkspaceProvider workspace={workspace}>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP]}
            secondaryMeasures={[Ldm.m_SnapshotEOP]}
            viewBy={Ldm.a_Product}
            config={{
                secondaryChartType: 'area',
                dataLabels: {
                    visible: true
                }
            }}
        />

        <h1>1PM,  1SM, 1VB, filter 1 value</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP]}
            secondaryMeasures={[Ldm.m_SnapshotEOP]}
            viewBy={Ldm.a_Product}
            config={{
                secondaryChartType: 'area'
            }}
            filters = {[LdmExt.filterProduct]}
        />

        <h1>2PM, 1SM, 1VB, filter 1 value</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_Amount, Ldm.m_AvgAmount]}
            secondaryMeasures={[LdmExt.m_MinAmount]}
            viewBy={Ldm.a_Product}
            config={{
                secondaryChartType: 'area'
            }}
            filters = {[LdmExt.filterProduct,LdmExt.relativeDateYear]}
        />
        
        <h1>2PM,  2SM, 1 date</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP, Ldm.m_ClosedEOP]}
            secondaryMeasures={[Ldm.m_SnapshotBOP, Ldm.m_SnapshotEOP]}
            viewBy={Ldm.a_YearSnapshot}
            config={{
                secondaryChartType: 'area'
            }}
        />
        <h1>2PM,  2SM, 1 date, stack measures</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP, Ldm.m_ClosedEOP]}
            secondaryMeasures={[Ldm.m_SnapshotBOP, Ldm.m_SnapshotEOP]}
            viewBy={Ldm.a_YearSnapshot}
            config={{
                secondaryChartType: 'area',
                stackMeasures: true
            }}
        />
        
        <h1>2PM,  2SM, 1 date, stack to percent</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP, Ldm.m_ClosedEOP]}
            secondaryMeasures={[Ldm.m_SnapshotBOP, Ldm.m_SnapshotEOP]}
            viewBy={Ldm.a_YearSnapshot}
            config={{
                secondaryChartType: 'area',
                stackMeasuresToPercent: true
            }}
        />

        <h1>2PM,  2SM, 1 date, stack to percent, pos+neg values</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_Amount, Ldm.m_AvgAmount]}
            secondaryMeasures={[Ldm.m_AvgWon,LdmExt.m_MinAmount]}
            viewBy={Ldm.a_YearSnapshot}
            config={{
                secondaryChartType: 'area',
                stackMeasuresToPercent: true
            }}
        />

        <h1>2PM,  2SM, 1 date, stack measures, disabled dual</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_Amount, Ldm.m_AvgAmount]}
            secondaryMeasures={[Ldm.m_AvgWon,LdmExt.m_MinAmount]}
            viewBy={Ldm.a_YearSnapshot}
            config={{
                secondaryChartType: 'area',
                stackMeasures: true,
                dualAxis: false
            }}
        />

        <h1>2PM,  2SM, 1 date, set min-max</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_Amount, Ldm.m_AvgAmount]}
            secondaryMeasures={[Ldm.m_AvgWon,Ldm.m_AmountBOP]}
            viewBy={Ldm.a_YearClosed}
            config={{
                secondaryChartType: 'area',
                dataLabels: {
                    visible: true
                },
                secondary_yaxis: {
                    visible: true,
                    labelsEnabled: true,
                    min: '800000',
                    rotation: "60"
                },
                yaxis: {
                    rotation: "60",
                    min: '400000'
                },
                xaxis: {
                    visible: true,
                    labelsEnabled: true,
                    rotation: '30'
                }
            }}
        />
        </WorkspaceProvider>  
</BackendProvider>
    </div>  
    ))
    .add('Line+Column', () => (
    <div style={WRAPPER_STYLE}>
        <h1>1PM,  1SM, 1VB</h1>
        <BackendProvider backend={backend}>
<WorkspaceProvider workspace={workspace}>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP]}
            secondaryMeasures={[Ldm.m_SnapshotBOP]}
            viewBy={Ldm.a_Product}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'column',
                dataLabels: {
                    visible: true
                }
            }}
        />

        <h1>1PM,  1SM, 1VB, filter 1 value</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP]}
            secondaryMeasures={[Ldm.m_SnapshotBOP]}
            viewBy={Ldm.a_Product}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'column',
            }}
            filters = {[LdmExt.filterProduct]}
        />

        <h1>2PM, 1SM, 1VB, filter 1 value</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_Amount, Ldm.m_AvgAmount]}
            secondaryMeasures={[LdmExt.m_MinAmount]}
            viewBy={Ldm.a_Product}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'column',
            }}
            filters = {[LdmExt.filterProduct,LdmExt.relativeDateYear]}
        />
        
        <h1>2PM,  2SM, 1 date</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP, Ldm.m_ClosedEOP]}
            secondaryMeasures={[Ldm.m_SnapshotBOP, Ldm.m_SnapshotEOP]}
            viewBy={Ldm.a_YearSnapshot}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'column',
            }}
        />
        <h1>2PM,  2SM, 1 date, stack measures</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP, Ldm.m_ClosedEOP]}
            secondaryMeasures={[Ldm.m_SnapshotBOP, Ldm.m_SnapshotEOP]}
            viewBy={Ldm.a_YearSnapshot}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'column',
                stackMeasures: true
            }}
        />
        
        <h1>2PM,  2SM, 1 date, stack to percent</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP, Ldm.m_ClosedEOP]}
            secondaryMeasures={[Ldm.m_SnapshotBOP, Ldm.m_SnapshotEOP]}
            viewBy={Ldm.a_YearSnapshot}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'column',
                stackMeasuresToPercent: true
            }}
        />

        <h1>2PM,  2SM, 1 date, stack to percent, pos+neg values</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_Amount, Ldm.m_AvgAmount]}
            secondaryMeasures={[Ldm.m_AvgWon, LdmExt.m_MinAmount]}
            viewBy={Ldm.a_YearSnapshot}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'column',
                stackMeasuresToPercent: true
            }}
        />

        <h1>2PM,  2SM, 1 date, stack measures, disabled dual</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_Amount, Ldm.m_AvgAmount]}
            secondaryMeasures={[Ldm.m_AvgWon, LdmExt.m_MinAmount]}
            viewBy={Ldm.a_YearSnapshot}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'column',
                stackMeasures: true,
                dualAxis: false
            }}
        />

        <h1>2PM,  2SM, 1 date, set min-max</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_Amount, Ldm.m_AvgAmount]}
            secondaryMeasures={[Ldm.m_AvgWon, Ldm.m_AmountBOP]}
            viewBy={Ldm.a_YearSnapshot}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'column',
                dataLabels: {
                    visible: true
                },
                secondary_yaxis: {
                    visible: true,
                    labelsEnabled: true,
                    min: '800000',
                    rotation: "60"
                },
                yaxis: {
                    rotation: "60",
                    min: '400000'
                },
                xaxis: {
                    visible: true,
                    labelsEnabled: true,
                    rotation: '30'
                }
            }}
        />    
        </WorkspaceProvider>  
</BackendProvider>
    </div> 
    ))
    .add('Line+Line', () => (
    <div style={WRAPPER_STYLE}>
        <h1>1PM,  1SM, 1VB</h1>
        <BackendProvider backend={backend}>
<WorkspaceProvider workspace={workspace}>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP]}
            secondaryMeasures={[Ldm.m_SnapshotEOP]}
            viewBy={Ldm.a_Product}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'line',
                dataLabels: {
                    visible: true
                }
            }}
        />

        <h1>1PM,  1SM, 1VB, filter 1 value</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP]}
            secondaryMeasures={[Ldm.m_SnapshotEOP]}
            viewBy={Ldm.a_Product}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'line',
            }}
            filters = {[LdmExt.filterProduct]}
        />

        <h1>2PM, 1SM, 1VB, filter 1 value</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_Amount, Ldm.m_AvgAmount]}
            secondaryMeasures={[LdmExt.m_MinAmount]}
            viewBy={Ldm.a_Product}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'line',
            }}
            filters = {[LdmExt.filterProduct,LdmExt.relativeDateYear]}
        />
        
        <h1>2PM,  2SM, 1 date</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP, Ldm.m_ClosedEOP]}
            secondaryMeasures={[Ldm.m_SnapshotBOP, Ldm.m_SnapshotEOP]}
            viewBy={Ldm.a_YearSnapshot}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'line',
            }}
        />
        <h1>2PM,  2SM, 1 date, stack measures</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP, Ldm.m_ClosedEOP]}
            secondaryMeasures={[Ldm.m_SnapshotBOP, Ldm.m_SnapshotEOP]}
            viewBy={Ldm.a_YearSnapshot}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'line',
                stackMeasures: true
            }}
        />
        
        <h1>2PM,  2SM, 1 date, stack to percent</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP, Ldm.m_ClosedEOP]}
            secondaryMeasures={[Ldm.m_SnapshotBOP, Ldm.m_SnapshotEOP]}
            viewBy={Ldm.a_YearSnapshot}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'line',
                stackMeasuresToPercent: true
            }}
        />

        <h1>2PM,  2SM, 1 date, stack to percent, pos+neg values</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_Amount, Ldm.m_AvgAmount]}
            secondaryMeasures={[Ldm.m_AvgWon, LdmExt.m_MinAmount.Min]}
            viewBy={Ldm.a_YearSnapshot}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'line',
                stackMeasuresToPercent: true
            }}
        />

        <h1>2PM,  2SM, 1 date, stack measures, disabled dual</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_Amount, Ldm.m_AvgAmount]}
            secondaryMeasures={[Ldm.m_AvgWon, LdmExt.m_MinAmount.Min]}
            viewBy={Ldm.a_YearSnapshot}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'line',
                stackMeasures: true,
                dualAxis: false
            }}
        />

        <h1>2PM,  2SM, 1 date, set min-max</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_Amount, Ldm.m_AvgAmount]}
            secondaryMeasures={[Ldm.m_AvgWon, Ldm.m_AmountBOP]}
            viewBy={Ldm.a_YearClosed}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'line',
                dataLabels: {
                    visible: true
                },
                secondary_yaxis: {
                    visible: true,
                    labelsEnabled: true,
                    min: '800000',
                    rotation: "60"
                },
                yaxis: {
                    rotation: "60",
                    min: '400000'
                },
                xaxis: {
                    visible: true,
                    labelsEnabled: true,
                    rotation: '30'
                }
            }}
        />
        </WorkspaceProvider>  
</BackendProvider>
    </div> 
    ))
    .add('Line+Area', () => (
    <div style={WRAPPER_STYLE}>
        <h1>1PM,  1SM, 1VB</h1>
        <BackendProvider backend={backend}>
<WorkspaceProvider workspace={workspace}>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP]}
            secondaryMeasures={[Ldm.m_SnapshotBOP]}
            viewBy={Ldm.a_Product}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'area',
                dataLabels: {
                    visible: true
                }
            }}
        />

        <h1>1PM,  1SM, 1VB, filter 1 value</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP]}
            secondaryMeasures={[Ldm.m_SnapshotBOP]}
            viewBy={Ldm.a_Product}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'area',
            }}
            filters = {[LdmExt.filterProduct]}
        />

        <h1>2PM, 1SM, 1VB, filter 1 value</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_Amount, Ldm.m_AvgAmount]}
            secondaryMeasures={[LdmExt.m_MinAmount.Min]}
            viewBy={Ldm.a_Product}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'area',
            }}
            filters = {[LdmExt.filterProduct,LdmExt.relativeDateYear]}
        />
        
        <h1>2PM,  2SM, 1 date</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP, Ldm.m_ClosedEOP]}
            secondaryMeasures={[Ldm.m_SnapshotBOP, Ldm.m_SnapshotEOP]}
            viewBy={Ldm.a_YearSnapshot}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'area',
            }}
        />
        <h1>2PM,  2SM, 1 date, stack measures</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP, Ldm.m_ClosedEOP]}
            secondaryMeasures={[Ldm.m_SnapshotBOP, Ldm.m_SnapshotEOP]}
            viewBy={Ldm.a_YearSnapshot}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'area',
                stackMeasures: true
            }}
        />
        
        <h1>2PM,  2SM, 1 date, stack to percent</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP, Ldm.m_ClosedEOP]}
            secondaryMeasures={[Ldm.m_SnapshotBOP, Ldm.m_SnapshotEOP]}
            viewBy={Ldm.a_YearSnapshot}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'area',
                stackMeasuresToPercent: true
            }}
        />

        <h1>2PM,  2SM, 1 date, stack to percent, pos+neg values</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_Amount, Ldm.m_AvgAmount]}
            secondaryMeasures={[Ldm.m_AvgWon, LdmExt.m_MinAmount]}
            viewBy={Ldm.a_YearSnapshot}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'area',
                stackMeasuresToPercent: true
            }}
        />

        <h1>2PM,  2SM, 1 date, stack measures, disabled dual</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_Amount, Ldm.m_AvgAmount]}
            secondaryMeasures={[Ldm.m_AvgWon, LdmExt.m_MinAmount]}
            viewBy={Ldm.a_YearSnapshot}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'area',
                stackMeasures: true,
                dualAxis: false
            }}
        />

        <h1>2PM,  2SM, 1 date, set min-max</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_Amount, Ldm.m_AvgAmount]}
            secondaryMeasures={[Ldm.m_AvgWon, Ldm.m_AmountBOP]}
            viewBy={Ldm.a_YearClosed}
            config={{
                primaryChartType: 'line',
                secondaryChartType: 'area',
                dataLabels: {
                    visible: true
                },
                secondary_yaxis: {
                    visible: true,
                    labelsEnabled: true,
                    min: '800000',
                    rotation: "60"
                },
                yaxis: {
                    rotation: "60",
                    min: '400000'
                },
                xaxis: {
                    visible: true,
                    labelsEnabled: true,
                    rotation: '30'
                }
            }}
        />
        </WorkspaceProvider>  
    </BackendProvider>
    </div>
    
    ))
    .add('Area+Column', () => (
    <div style={WRAPPER_STYLE}>
        <h1>1PM,  1SM, 1VB</h1>
        <BackendProvider backend={backend}>
<WorkspaceProvider workspace={workspace}>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP]}
            secondaryMeasures={[Ldm.m_SnapshotBOP]}
            viewBy={Ldm.a_Product}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'column',
                dataLabels: {
                    visible: true
                }
            }}
        />

        <h1>1PM,  1SM, 1VB, filter 1 value</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP]}
            secondaryMeasures={[Ldm.m_SnapshotBOP]}
            viewBy={Ldm.a_Product}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'column',
            }}
            filters = {[LdmExt.filterProduct]}
        />

        <h1>2PM, 1SM, 1VB, filter 1 value</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_Amount, Ldm.m_AvgAmount]}
            secondaryMeasures={[LdmExt.m_MinAmount]}
            viewBy={Ldm.a_Product}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'column',
            }}
            filters = {[LdmExt.filterProduct,LdmExt.relativeDateYear]}
        />
        
        <h1>2PM,  2SM, 1 date</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP, Ldm.m_ClosedEOP]}
            secondaryMeasures={[Ldm.m_SnapshotBOP, Ldm.m_SnapshotEOP]}
            viewBy={Ldm.a_YearSnapshot}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'column',
            }}
        />
        <h1>2PM,  2SM, 1 date, stack measures</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP, Ldm.m_ClosedEOP]}
            secondaryMeasures={[Ldm.m_SnapshotBOP, Ldm.m_SnapshotEOP]}
            viewBy={Ldm.a_YearSnapshot}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'column',
                stackMeasures: true
            }}
        />
        
        <h1>2PM,  2SM, 1 date, stack to percent</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP, Ldm.m_ClosedEOP]}
            secondaryMeasures={[Ldm.m_SnapshotBOP, Ldm.m_SnapshotEOP]}
            viewBy={Ldm.a_YearSnapshot}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'column',
                stackMeasuresToPercent: true
            }}
        />

        <h1>2PM,  2SM, 1 date, stack to percent, pos+neg values</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_Amount, Ldm.m_AvgAmount]}
            secondaryMeasures={[Ldm.m_AvgWon, LdmExt.m_MinAmount]}
            viewBy={Ldm.a_YearSnapshot}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'column',
                stackMeasuresToPercent: true
            }}
        />

        <h1>2PM,  2SM, 1 date, stack measures, disabled dual</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_Amount, Ldm.m_AvgAmount]}
            secondaryMeasures={[Ldm.m_AvgWon, LdmExt.m_MinAmount]}
            viewBy={Ldm.a_YearSnapshot}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'column',
                stackMeasures: true,
                dualAxis: false
            }}
        />

        <h1>2PM,  2SM, 1 date, set min-max</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_Amount, Ldm.m_AvgAmount]}
            secondaryMeasures={[Ldm.m_AvgWon, Ldm.m_AmountBOP]}
            viewBy={Ldm.a_YearClosed}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'column',
                dataLabels: {
                    visible: true
                },
                secondary_yaxis: {
                    visible: true,
                    labelsEnabled: true,
                    min: '800000',
                    rotation: "60"
                },
                yaxis: {
                    rotation: "60",
                    min: '400000'
                },
                xaxis: {
                    visible: true,
                    labelsEnabled: true,
                    rotation: '30'
                }
            }}
        />
        </WorkspaceProvider>  
</BackendProvider>
    </div>
    ))
    .add('Area+Line', () => (
    <div style={WRAPPER_STYLE}>
        <h1>1PM,  1SM, 1VB</h1>
        <BackendProvider backend={backend}>
<WorkspaceProvider workspace={workspace}>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP]}
            secondaryMeasures={[Ldm.m_SnapshotBOP]}
            viewBy={Ldm.a_Product}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'line',
                dataLabels: {
                    visible: true
                }
            }}
        />

        <h1>1PM,  1SM, 1VB, filter 1 value</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP]}
            secondaryMeasures={[Ldm.m_SnapshotBOP]}
            viewBy={Ldm.a_Product}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'line',
            }}
            filters = {[LdmExt.filterProduct]}
        />

        <h1>2PM, 1SM, 1VB, filter 1 value</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_Amount, Ldm.m_AvgAmount]}
            secondaryMeasures={[LdmExt.m_MinAmount]}
            viewBy={Ldm.a_Product}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'line',
            }}
            filters = {[LdmExt.filterProduct,LdmExt.relativeDateYear]}
        />
        
        <h1>2PM,  2SM, 1 date</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP, Ldm.m_ClosedEOP]}
            secondaryMeasures={[Ldm.m_SnapshotBOP, Ldm.m_SnapshotEOP]}
            viewBy={Ldm.a_YearSnapshot}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'line',
            }}
        />
        <h1>2PM,  2SM, 1 date, stack measures</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP, Ldm.m_ClosedEOP]}
            secondaryMeasures={[Ldm.m_SnapshotBOP, Ldm.m_SnapshotEOP]}
            viewBy={Ldm.a_YearSnapshot}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'line',
                stackMeasures: true
            }}
        />
        
        <h1>2PM,  2SM, 1 date, stack to percent</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP, Ldm.m_ClosedEOP]}
            secondaryMeasures={[Ldm.m_SnapshotBOP, Ldm.m_SnapshotEOP]}
            viewBy={Ldm.a_YearSnapshot}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'line',
                stackMeasuresToPercent: true
            }}
        />

        <h1>2PM,  2SM, 1 date, stack to percent, pos+neg values</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_Amount, Ldm.m_AvgAmount]}
            secondaryMeasures={[Ldm.m_AvgWon, LdmExt.m_MinAmount]}
            viewBy={Ldm.a_YearSnapshot}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'line',
                stackMeasuresToPercent: true
            }}
        />

        <h1>2PM,  2SM, 1 date, stack measures, disabled dual</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_Amount, Ldm.m_AvgAmount]}
            secondaryMeasures={[Ldm.m_AvgWon, LdmExt.m_MinAmount]}
            viewBy={Ldm.a_YearSnapshot}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'line',
                stackMeasures: true,
                dualAxis: false
            }}
        />

        <h1>2PM,  2SM, 1 date, set min-max</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_Amount, Ldm.m_AvgAmount]}
            secondaryMeasures={[Ldm.m_AvgWon, Ldm.m_AmountBOP]}
            viewBy={Ldm.a_YearClosed}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'line',
                dataLabels: {
                    visible: true
                },
                secondary_yaxis: {
                    visible: true,
                    labelsEnabled: true,
                    min: '800000',
                    rotation: "60"
                },
                yaxis: {
                    rotation: "60",
                    min: '400000'
                },
                xaxis: {
                    visible: true,
                    labelsEnabled: true,
                    rotation: '30'
                }
            }}
        />
        </WorkspaceProvider>  
</BackendProvider>
    </div>
    ))
    .add('Area+Area', () => (
    <div style={WRAPPER_STYLE}>
        <h1>1PM,  1SM, 1VB</h1>
        <BackendProvider backend={backend}>
<WorkspaceProvider workspace={workspace}>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP]}
            secondaryMeasures={[Ldm.m_SnapshotBOP]}
            viewBy={Ldm.a_Product}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'area',
                dataLabels: {
                    visible: true
                }
            }}
        />

        <h1>1PM,  1SM, 1VB, filter 1 value</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP]}
            secondaryMeasures={[Ldm.m_SnapshotBOP]}
            viewBy={Ldm.a_Product}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'area',
            }}
            filters = {[LdmExt.filterProduct]}
        />

        <h1>2PM, 1SM, 1VB, filter 1 value</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_Amount, Ldm.m_AvgAmount]}
            secondaryMeasures={[LdmExt.m_MinAmount]}
            viewBy={Ldm.a_Product}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'area',
            }}
            filters = {[LdmExt.filterProduct,LdmExt.relativeDateYear]}
        />
        
        <h1>2PM,  2SM, 1 date</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP, Ldm.m_ClosedEOP]}
            secondaryMeasures={[Ldm.m_SnapshotBOP, Ldm.m_SnapshotEOP]}
            viewBy={Ldm.a_YearSnapshot}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'area',
            }}
        />
        <h1>2PM,  2SM, 1 date, stack measures</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP, Ldm.m_ClosedEOP]}
            secondaryMeasures={[Ldm.m_SnapshotBOP, Ldm.m_SnapshotEOP]}
            viewBy={Ldm.a_YearSnapshot}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'area',
                stackMeasures: true
            }}
        />
        
        <h1>2PM,  2SM, 1 date, stack to percent</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP, Ldm.m_ClosedEOP]}
            secondaryMeasures={[Ldm.m_SnapshotBOP, Ldm.m_SnapshotEOP]}
            viewBy={Ldm.a_YearSnapshot}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'area',
                stackMeasuresToPercent: true
            }}
        />

        <h1>2PM,  2SM, 1 date, stack to percent, pos+neg values</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_Amount, Ldm.m_AvgAmount]}
            secondaryMeasures={[Ldm.m_AvgWon, LdmExt.m_MinAmount.Min]}
            viewBy={Ldm.a_YearSnapshot}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'area',
                stackMeasuresToPercent: true
            }}
        />

        <h1>2PM,  2SM, 1 date, stack measures, disabled dual</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_Amount, Ldm.m_AvgAmount]}
            secondaryMeasures={[Ldm.m_AvgWon, LdmExt.m_MinAmount]}
            viewBy={Ldm.a_YearSnapshot}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'area',
                stackMeasures: true,
                dualAxis: false
            }}
        />

        <h1>2PM,  2SM, 1 date, set min-max</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_Amount, Ldm.m_AvgAmount]}
            secondaryMeasures={[Ldm.m_AvgWon, Ldm.m_AmountBOP]}
            viewBy={Ldm.a_YearClosed}
            config={{
                primaryChartType: 'area',
                secondaryChartType: 'area',
                dataLabels: {
                    visible: true
                },
                secondary_yaxis: {
                    visible: true,
                    labelsEnabled: true,
                    min: '800000',
                    rotation: "60"
                },
                yaxis: {
                    rotation: "60",
                    min: '400000'
                },
                xaxis: {
                    visible: true,
                    labelsEnabled: true,
                    rotation: '30'
                }
            }}
        />
        </WorkspaceProvider>  
</BackendProvider>
    </div>

));
