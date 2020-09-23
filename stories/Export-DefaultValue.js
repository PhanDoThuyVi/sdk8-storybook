import React from 'react';
import { storiesOf } from '@storybook/react';
import '@gooddata/sdk-ui-charts/styles/css/main.css'; 
import {LineChart, AreaChart, BarChart, BubbleChart,ColumnChart, DonutChart, Headline, Heatmap, PieChart, ScatterPlot,Treemap, ComboChart } from '@gooddata/sdk-ui-charts';
import { PivotTable } from '@gooddata/sdk-ui-pivot';
import { BackendProvider } from "@gooddata/sdk-ui";
import { WorkspaceProvider } from "@gooddata/sdk-ui";
import bearFactory, { ContextDeferredAuthProvider } from "@gooddata/sdk-backend-bear";
import { projectId as workspace } from "../src/constants";
import {Ldm, LdmExt} from "../src/ldm";

const backend = bearFactory().withAuthentication(new ContextDeferredAuthProvider());
const WRAPPER_STYLE = { width: 800, height: 400 };
const DOWNLOADER_ID = 'downloader';
let exportResult: any;

function onExportReady(execution: any){
	exportResult = execution;
}

async function doExport(customTitle: any){
    console.log(customTitle);
	const result = await exportResult({
		format: 'xlsx',
	});
	window.open(result.uri);
}

storiesOf('Export/Default value + showFilters', module)
    .add('ComboChart', () => (
	<div style={WRAPPER_STYLE}>
        <p>Format: xslx ; No Title ; showFilters: [filterProduct, filterStageName, LdmExt.absoluteDate, relativeDate]</p>
        <p>Applied filter by string (positive), identifier (positive), relativeDate</p>
        <BackendProvider backend={backend}>
        <WorkspaceProvider workspace={workspace}>
        <ComboChart
            primaryMeasures={[LdmExt.m_ClosedBOP, Ldm.m_ClosedEOP, LdmExt.m_SumDayToClose]}
            secondaryMeasures={[LdmExt.m_SnapshotBOP, LdmExt.m_POP_SumDayToClose]}
            viewBy={[LdmExt.a_Product, LdmExt.a_StageName]}
            config={{
                //primaryChartType: 'column',
                //secondaryChartType: 'line'
            }}
			filters = {[LdmExt.filterProduct,LdmExt.filterStageName,LdmExt.relativeDateYear]}
			onExportReady = {onExportReady}
        />
		<button onClick={doExport}>Export</button>
        </WorkspaceProvider>  
            </BackendProvider>
            </div>
    ))
    .add('Line', () => (
        <div style={WRAPPER_STYLE}>
            <p>Format: xslx ; Title: Don't config ; includeFilterContext</p>
            <p>Applied filter by string, identifier, relativeDate</p>
            <BackendProvider backend={backend}>
            <WorkspaceProvider workspace={workspace}>
            <LineChart
               measures={[LdmExt.m_SumDayToClose, LdmExt.m_ClosedBOP, LdmExt.m_SnapshotBOP, LdmExt.m_POP_SumDayToClose, LdmExt.m_Difference_ClosedBOP_SnapshotBOP, LdmExt.m_Multiplication_ClosedBOP_SnapshotBOP, LdmExt.m_Ratio_ClosedBOP_SnapshotBOP]}
                trendBy={LdmExt.a_Product}
                filters = {[LdmExt.filterProduct,LdmExt.filterStageName,LdmExt.relativeDateYear]}
                onExportReady = {onExportReady}
            />
            <button onClick={doExport}>Export</button>
            </WorkspaceProvider>  
            </BackendProvider>
            </div>
        ))
        .add('Colunm', () => (
            <div style={WRAPPER_STYLE}>
                <p>Format: xslx ; Title: Don't config ; includeFilterContext</p>
                <p>Applied filter by string, identifier, relativeDate</p>
                <p>Stack% and dual axis</p>
                <BackendProvider backend={backend}>
        <WorkspaceProvider workspace={workspace}>
                <ColumnChart
                    measures={[LdmExt.m_SumDayToClose, LdmExt.m_ClosedBOP, LdmExt.m_SnapshotBOP, LdmExt.m_PP_SumDayToClose, LdmExt.m_Difference_ClosedBOP_SnapshotBOP, LdmExt.m_Multiplication_ClosedBOP_SnapshotBOP, LdmExt.m_Ratio_ClosedBOP_SnapshotBOP]}
                    viewBy={[LdmExt.a_Product, LdmExt.a_StageName]}
                    config={{
                        stackMeasuresToPercent: true,
                        secondary_yaxis: {
                            measures: ['aazV2yX2gz2z']
                        }
                    }}
                    filters = {[LdmExt.filterProduct,LdmExt.filterStageName,LdmExt.absoluteDate]}
                    onExportReady = {onExportReady}
                />
                <button onClick={doExport}>Export</button>
                </WorkspaceProvider>  
            </BackendProvider>
            </div>
            ))
            .add('Bar', () => (
                <div style={WRAPPER_STYLE}>
                    <p>Format: xslx ; Title: Don't config ; includeFilterContext</p>
                    <p>Applied filter by string, identifier, relativeDate</p>
                    <p>Stack measures and dual axis</p>
                    <BackendProvider backend={backend}>
        <WorkspaceProvider workspace={workspace}>
                    <BarChart
                       measures={[LdmExt.m_SumDayToClose, LdmExt.m_ClosedBOP, LdmExt.m_SnapshotBOP, LdmExt.m_PP_SumDayToClose, LdmExt.m_Difference_ClosedBOP_SnapshotBOP, LdmExt.m_Multiplication_ClosedBOP_SnapshotBOP, LdmExt.m_Ratio_ClosedBOP_SnapshotBOP]}
                        viewBy={[LdmExt.a_Product, LdmExt.a_StageName]}
                        config={{
                            stackMeasures: true,
                            secondary_yaxis: {
                                measures: ['aazV2yX2gz2z']
                            }
                        }}
                        filters = {[LdmExt.filterProduct,LdmExt.filterStageName,LdmExt.absoluteDate]}
                        onExportReady = {onExportReady}
                    />
                    <button onClick={doExport}>Export</button>
                    </WorkspaceProvider>  
            </BackendProvider>
            </div>
                ))
                .add('Area', () => (
                    <div style={WRAPPER_STYLE}>
                        <p>Format: xslx ; Title: Don't config ; includeFilterContext</p>
                        <p>Applied filter by string, identifier, relativeDate</p>
                        <p>ShowIn%</p>
                        <BackendProvider backend={backend}>
        <WorkspaceProvider workspace={workspace}>
                        <AreaChart
                            measures={[LdmExt.m_SumDayToCloseRatio, LdmExt.m_SnapshotBOP]}
                            viewBy={[LdmExt.a_Product, LdmExt.a_StageName]}
                            config={{
                                stackMeasures: true,
                                secondary_yaxis: {
                                    measures: ['aazV2yX2gz2z']
                                }
                            }}
                            filters = {[LdmExt.filterProduct,LdmExt.filterStageName,LdmExt.absoluteDate]}
                            onExportReady = {onExportReady}
                        />
                        <button onClick={doExport}>Export</button>
                        </WorkspaceProvider>  
            </BackendProvider>
            </div>
                    ))
        .add('Bubble', () => (
            <div style={WRAPPER_STYLE}>
                <p>Format: xslx ; Title: Don't config ; includeFilterContext</p>
                <p>Applied filter by string, identifier, relativeDate</p>
                <BackendProvider backend={backend}>
        <WorkspaceProvider workspace={workspace}>
                <BubbleChart
                    xAxisMeasure={LdmExt.m_SumDayToClose}
                    yAxisMeasure={LdmExt.m_SnapshotBOP}
                    size={LdmExt.m_ClosedBOP}
                    viewBy={LdmExt.a_Product}
                    filters = {[LdmExt.filterProduct,LdmExt.filterStageName,LdmExt.absoluteDate]}
                    onExportReady = {onExportReady}
                />
            <button onClick={doExport}>Export</button>
            </WorkspaceProvider>  
            </BackendProvider>
            </div>
        ))
        .add('ScatterPlot', () => (
            <div style={WRAPPER_STYLE}>
                <p>Format: xslx ; Title: Don't config ; includeFilterContext</p>
                <p>Applied filter by string, identifier, relativeDate</p>
                <BackendProvider backend={backend}>
        <WorkspaceProvider workspace={workspace}>
                <ScatterPlot
                    xAxisMeasure={LdmExt.m_SumDayToClose}
                    yAxisMeasure={LdmExt.m_SnapshotBOP}
                    size={LdmExt.m_ClosedBOP}
                    attribute={LdmExt.a_Product}
                    filters = {[LdmExt.filterProduct,LdmExt.filterStageName,LdmExt.absoluteDate]}
                    onExportReady = {onExportReady}
                />
                <button onClick={doExport}>Export</button>
                </WorkspaceProvider>  
            </BackendProvider>
            </div>
        ))
        .add('Donut', () => (
            <div style={WRAPPER_STYLE}>
                <p>Format: xslx ; Title: Don't config ; includeFilterContext</p>
                <p>Applied filter by string, identifier, relativeDate</p>
                <BackendProvider backend={backend}>
        <WorkspaceProvider workspace={workspace}>
                <DonutChart
                    measures={[LdmExt.m_SumDayToClose]}
                    viewBy={LdmExt.a_Product}
                    filters = {[LdmExt.filterProduct,LdmExt.filterStageName,LdmExt.absoluteDate]}
                    onExportReady = {onExportReady}
                />
                <button onClick={doExport}>Export</button>
                </WorkspaceProvider>  
            </BackendProvider>
            </div>
        ))
        .add('Pie', () => (
            <div style={WRAPPER_STYLE}>
                <p>Format: xslx ; Title: Don't config ; includeFilterContext</p>
                <p>Applied filter by string, identifier, relativeDate</p>
                <BackendProvider backend={backend}>
        <WorkspaceProvider workspace={workspace}>
                <PieChart
                    measures={[LdmExt.m_SumDayToClose,LdmExt.m_SnapshotBOP]}
                    filters = {[LdmExt.filterProduct,LdmExt.filterStageName,LdmExt.absoluteDate]}
                    onExportReady = {onExportReady}
                />
                <button onClick={doExport}>Export</button>
                </WorkspaceProvider>  
            </BackendProvider>
            </div>
        ))
        .add('Pivot', () => (
            <div style={WRAPPER_STYLE}>
                <p>Format: xslx ; Title: Don't config ; includeFilterContext</p>
                <p>Applied filter by string, identifier, relativeDate</p>
                <p>ChangeAM</p>
                <BackendProvider backend={backend}>
        <WorkspaceProvider workspace={workspace}>
                <PivotTable
                    measures={[LdmExt.m_SnapshotBOP, LdmExt.m_ClosedBOP, LdmExt.m_Change_ClosedBOP_SnapshotBOP]}
                    rows={[LdmExt.a_Product, LdmExt.a_StageName]}
                    columns={[LdmExt.a_Department]}
                    filters = {[LdmExt.filterProduct,LdmExt.filterStageName,LdmExt.absoluteDate]}
                    onExportReady = {onExportReady}
                />
                <button onClick={doExport}>Export</button>
                </WorkspaceProvider>  
            </BackendProvider>
            </div>
        ))
        .add('Treemap', () => (
            <div style={WRAPPER_STYLE}>
                <p>Format: xslx ; Title: Don't config ; includeFilterContext</p>
                <p>Applied filter by string, identifier, relativeDate</p>
                <BackendProvider backend={backend}>
        <WorkspaceProvider workspace={workspace}>
                <Treemap
                    measures={[LdmExt.m_SnapshotBOP, LdmExt.m_ClosedBOP, LdmExt.m_Change_ClosedBOP_SnapshotBOP]}
                    viewBy={LdmExt.a_Product}
                    segmentBy={LdmExt.a_StageName}
                    filters = {[LdmExt.filterProduct,LdmExt.filterStageName,LdmExt.absoluteDate]}
                    onExportReady = {onExportReady}
                />
                <button onClick={doExport}>Export</button>
                </WorkspaceProvider>  
            </BackendProvider>
            </div>
        ))
        .add('HeatMap', () => (
            <div style={WRAPPER_STYLE}>
                <p>Format: xslx ; Title: Don't config ; includeFilterContext</p>
                <p>Applied filter by string, identifier, relativeDate</p>
                <BackendProvider backend={backend}>
        <WorkspaceProvider workspace={workspace}>
                <Heatmap
                    measure={LdmExt.m_SnapshotBOP}
                    rows={LdmExt.a_Product}
                    columns={LdmExt.a_StageName}
                    filters = {[LdmExt.filterProduct,LdmExt.filterStageName,LdmExt.absoluteDate]}
                    onExportReady = {onExportReady}
                />
                <button onClick={doExport}>Export</button>
                </WorkspaceProvider>  
            </BackendProvider>
            </div>
        ))
        .add('Headline', () => (
            <div style={WRAPPER_STYLE}>
                <p>Format: xslx ; Title: Don't config ; includeFilterContext</p>
                <p>Applied filter by string, identifier, relativeDate</p>
                <BackendProvider backend={backend}>
        <WorkspaceProvider workspace={workspace}>
                <Headline
                    primaryMeasure={LdmExt.m_SumDayToClose}
                    secondaryMeasure={LdmExt.m_SnapshotBOP}
                    filters = {[LdmExt.filterProduct,LdmExt.filterStageName,LdmExt.absoluteDate]}
                    onExportReady = {onExportReady}
                />
                <button onClick={doExport}>Export</button>
            </WorkspaceProvider>  
            </BackendProvider>
            </div>
        ))
                    
;