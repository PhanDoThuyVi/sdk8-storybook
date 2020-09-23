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
import { HeaderPredicates } from "@gooddata/sdk-ui";

const backend = bearFactory().withAuthentication(new ContextDeferredAuthProvider());
const WRAPPER_STYLE = { width: 800, height: 400 };
const DOWNLOADER_ID = 'downloader';
let exportResult: any;

function onExportReady(execution: any){
	exportResult = execution;
}

function onDrillHandler(data){
    console.log(data.executionContext); 
    console.log(data.drillContext);
}

async function doExport(){
	const result = await exportResult({
		format: 'csv',
		includeFilterContext: true,
		mergeHeaders: true
	});
	window.open(result.uri);
}

storiesOf('Export/CSV', module)
    .add('CSV-ComboChart', () => (
	<div style={WRAPPER_STYLE}>
        <p>Format: csv ; Title: No title ; mergeHeaders ; includeFilterContext</p>
        <p>Applied filter by string (negative), identifier (negative), relativeDate</p>
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
            drillableItems={[
                HeaderPredicates.uriMatch(LdmExt.ProductCompuSciUri),
             ]}
             onDrill={onDrillHandler}
			filters = {[LdmExt.filterProduct,LdmExt.filterStageName,LdmExt.relativeDateYear]}
			onExportReady = {onExportReady}
        />
		<button onClick={doExport}>Export</button>
        </WorkspaceProvider>  
        </BackendProvider>
        </div>
    ))
    .add('CSV-Line', () => (
        <div style={WRAPPER_STYLE}>
            <p>Format: csv ; Title: No title ; mergeHeaders ; includeFilterContext</p>
            <p>Applied filter by string (negative), identifier (negative), relativeDate</p>
            <BackendProvider backend={backend}>
            <WorkspaceProvider workspace={workspace}>
            <LineChart
                measures={[LdmExt.m_SumDayToClose, LdmExt.m_ClosedBOP, LdmExt.m_SnapshotBOP, LdmExt.m_POP_SumDayToClose, LdmExt.m_Difference_ClosedBOP_SnapshotBOP, LdmExt.m_Multiplication_ClosedBOP_SnapshotBOP, LdmExt.m_Ratio_ClosedBOP_SnapshotBOP]}
                trendBy={LdmExt.a_Product}
                drillableItems={[
                    HeaderPredicates.uriMatch(LdmExt.ProductCompuSciUri),
                 ]}
                 onDrill={onDrillHandler}
                filters = {[LdmExt.filterProduct,LdmExt.filterStageName,LdmExt.relativeDateYear]}
                onExportReady = {onExportReady}
            />
            <button onClick={doExport}>Export</button>
            </WorkspaceProvider>  
        </BackendProvider>
        </div>
        ))
        .add('CSV-Colunm', () => (
            <div style={WRAPPER_STYLE}>
                <p>Format: csv ; Title: No title ; mergeHeaders ; includeFilterContext</p>
                <p>Applied filter by string (negative), identifier (negative), LdmExt.absoluteDate</p>
                <p>Stack% and dual axis</p>
                <BackendProvider backend={backend}>
                <WorkspaceProvider workspace={workspace}>
                <ColumnChart
                    measures={[LdmExt.m_SumDayToClose, LdmExt.m_ClosedBOP, LdmExt.m_SnapshotBOP, LdmExt.m_PP_SumDayToClose, LdmExt.m_Difference_ClosedBOP_SnapshotBOP, LdmExt.m_Multiplication_ClosedBOP_SnapshotBOP, LdmExt.m_Ratio_ClosedBOP_SnapshotBOP]}
                    viewBy={[LdmExt.a_Product, LdmExt.a_StageName]}
                    config={{
                        stackMeasuresToPercent: true,
                        // secondary_yaxis: {
                        //     measures: ['aazV2yX2gz2z']
                        // }
                    }}
                    drillableItems={[
                        HeaderPredicates.uriMatch(LdmExt.ProductCompuSciUri),
                     ]}
                     onDrill={onDrillHandler}
                    filters = {[LdmExt.filterProduct,LdmExt.filterStageName,LdmExt.absoluteDate]}
                    onExportReady = {onExportReady}
                />
                <button onClick={doExport}>Export</button>
                </WorkspaceProvider>  
        </BackendProvider>
        </div>
            ))
            .add('CSV-Bar', () => (
                <div style={WRAPPER_STYLE}>
                    <p>Format: csv ; Title: No title ; mergeHeaders ; includeFilterContext</p>
                    <p>Applied filter by string (negative), identifier (negative), LdmExt.absoluteDate</p>
                    <p>Stack measures and dual axis</p>
                    <BackendProvider backend={backend}>
                    <WorkspaceProvider workspace={workspace}>
                    <BarChart
                        measures={[LdmExt.m_SumDayToClose, LdmExt.m_ClosedBOP, LdmExt.m_SnapshotBOP, LdmExt.m_PP_SumDayToClose, LdmExt.m_Difference_ClosedBOP_SnapshotBOP, LdmExt.m_Multiplication_ClosedBOP_SnapshotBOP, LdmExt.m_Ratio_ClosedBOP_SnapshotBOP]}
                        viewBy={[LdmExt.a_Product, LdmExt.a_StageName]}
                        config={{
                            stackMeasures: true,
                            // secondary_yaxis: {
                            //     measures: ['aazV2yX2gz2z']
                            // }
                        }}
                        drillableItems={[
                            HeaderPredicates.uriMatch(LdmExt.ProductCompuSciUri),
                         ]}
                         onDrill={onDrillHandler}
                        filters = {[LdmExt.filterProduct,LdmExt.filterStageName,LdmExt.absoluteDate]}
                        onExportReady = {onExportReady}
                    />
                    <button onClick={doExport}>Export</button>
                    </WorkspaceProvider>  
        </BackendProvider>
        </div>
                ))
                .add('CSV-Area', () => (
                    <div style={WRAPPER_STYLE}>
                        <p>Format: csv ; Title: No title ; mergeHeaders ; includeFilterContext</p>
                        <p>Applied filter by string (negative), identifier (negative), LdmExt.absoluteDate</p>
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
                            drillableItems={[
                                HeaderPredicates.uriMatch(LdmExt.ProductUri),
                             ]}
                             onDrill={onDrillHandler}
                            filters = {[LdmExt.filterProduct,LdmExt.filterStageName,LdmExt.absoluteDate]}
                            onExportReady = {onExportReady}
                        />
                        <button onClick={doExport}>Export</button>
                        </WorkspaceProvider>  
        </BackendProvider>
        </div>
                    ))
        .add('CSV-Bubble', () => (
            <div style={WRAPPER_STYLE}>
                <p>Format: csv ; Title: No title ; mergeHeaders ; includeFilterContext</p>
                <p>Applied filter by string (negative), identifier (negative), LdmExt.absoluteDate</p>
                <BackendProvider backend={backend}>
        <WorkspaceProvider workspace={workspace}>
                <BubbleChart
                    xAxisMeasure={LdmExt.m_SumDayToClose}
                    yAxisMeasure={LdmExt.m_SnapshotBOP}
                    size={LdmExt.m_ClosedBOP}
                    viewBy={LdmExt.a_Product}
                    drillableItems={[
                        HeaderPredicates.uriMatch(LdmExt.ProductUri),
                    ]}
                    onDrill={onDrillHandler}
                    filters = {[LdmExt.filterProduct,LdmExt.filterStageName,LdmExt.absoluteDate]}
                    onExportReady = {onExportReady}
                />
            <button onClick={doExport}>Export</button>
            </WorkspaceProvider>  
        </BackendProvider>
        </div>
        ))
        .add('CSV-ScatterPlot', () => (
            <div style={WRAPPER_STYLE}>
                <p>Format: csv ; Title: No title ; mergeHeaders ; includeFilterContext</p>
                <p>Applied filter by string (negative), identifier (negative), LdmExt.absoluteDate</p>
                <BackendProvider backend={backend}>
        <WorkspaceProvider workspace={workspace}>
                <ScatterPlot
                    xAxisMeasure={LdmExt.m_SumDayToClose}
                    yAxisMeasure={LdmExt.m_SnapshotBOP}
                    size={LdmExt.m_ClosedBOP}
                    attribute={LdmExt.a_Product}
                    drillableItems={[
                        HeaderPredicates.uriMatch(LdmExt.ProductUri),
                     ]}
                     onDrill={onDrillHandler}
                    filters = {[LdmExt.filterProduct,LdmExt.filterStageName,LdmExt.absoluteDate]}
                    onExportReady = {onExportReady}
                />
                <button onClick={doExport}>Export</button>
                </WorkspaceProvider>  
        </BackendProvider>
        </div>
        ))
        .add('CSV-Donut', () => (
            <div style={WRAPPER_STYLE}>
                <p>Format: csv ; Title: No title ; mergeHeaders ; includeFilterContext</p>
                <p>Applied filter by string (negative), identifier (negative), LdmExt.absoluteDate</p>
                <BackendProvider backend={backend}>
        <WorkspaceProvider workspace={workspace}>
                <DonutChart
                    measures={[LdmExt.m_SumDayToClose]}
                    viewBy={LdmExt.a_Product}
                    drillableItems={[
                        HeaderPredicates.uriMatch(LdmExt.ProductUri),
                     ]}
                     onDrill={onDrillHandler}
                    filters = {[LdmExt.filterProduct,LdmExt.filterStageName,LdmExt.absoluteDate]}
                    onExportReady = {onExportReady}
                />
                <button onClick={doExport}>Export</button>
                </WorkspaceProvider>  
        </BackendProvider>
        </div>
        ))
        .add('CSV-Pie', () => (
            <div style={WRAPPER_STYLE}>
                <p>Format: csv ; Title: No title ; mergeHeaders ; includeFilterContext</p>
                <p>Applied filter by string (negative), identifier (negative), LdmExt.absoluteDate</p>
                <BackendProvider backend={backend}>
        <WorkspaceProvider workspace={workspace}>
                <PieChart
                    measures={[LdmExt.m_SumDayToClose,LdmExt.m_SnapshotBOP]}
                    drillableItems={[
                        HeaderPredicates.uriMatch(LdmExt.ProductUri),
                     ]}
                     onDrill={onDrillHandler}
                    filters = {[LdmExt.filterProduct,LdmExt.filterStageName,LdmExt.absoluteDate]}
                    onExportReady = {onExportReady}
                />
                <button onClick={doExport}>Export</button>
                </WorkspaceProvider>  
        </BackendProvider>
        </div>
        ))
        .add('CSV-Pivot', () => (
            <div style={WRAPPER_STYLE}>
                <p>Format: csv ; Title: No title ; mergeHeaders ; includeFilterContext</p>
                <p>Applied filter by string (negative), identifier (negative), LdmExt.absoluteDate</p>
                <p>ChangeAM</p>
                <BackendProvider backend={backend}>
        <WorkspaceProvider workspace={workspace}>
                <PivotTable
                    measures={[LdmExt.m_SnapshotBOP, LdmExt.m_ClosedBOP, LdmExt.m_Change_ClosedBOP_SnapshotBOP]}
                    rows={[LdmExt.a_Product, LdmExt.a_StageName]}
                    columns={[LdmExt.a_Department]}
                    drillableItems={[
                        HeaderPredicates.uriMatch(LdmExt.ProductUri),
                     ]}
                     onDrill={onDrillHandler}
                    filters = {[LdmExt.filterProduct,LdmExt.filterStageName,LdmExt.absoluteDate]}
                    onExportReady = {onExportReady}
                />
                <button onClick={doExport}>Export</button>
                </WorkspaceProvider>  
        </BackendProvider>
        </div>
        ))
        .add('CSV-Treemap', () => (
            <div style={WRAPPER_STYLE}>
                <p>Format: csv ; Title: No title ; mergeHeaders ; includeFilterContext</p>
                <p>Applied filter by string (negative), identifier (negative), LdmExt.absoluteDate</p>
                <BackendProvider backend={backend}>
        <WorkspaceProvider workspace={workspace}>
                <Treemap
                    measures={[LdmExt.m_SnapshotBOP, LdmExt.m_ClosedBOP, LdmExt.m_Change_ClosedBOP_SnapshotBOP]}
                    viewBy={LdmExt.a_Product}
                    segmentBy={LdmExt.a_StageName}
                    drillableItems={[
                        HeaderPredicates.uriMatch(LdmExt.ProductUri),
                     ]}
                     onDrill={onDrillHandler}
                    filters = {[LdmExt.filterProduct,LdmExt.filterStageName,LdmExt.absoluteDate]}
                    onExportReady = {onExportReady}
                />
                <button onClick={doExport}>Export</button>
                </WorkspaceProvider>  
        </BackendProvider>
        </div>
        ))
        .add('CSV-HeatMap', () => (
            <div style={WRAPPER_STYLE}>
                <p>Format: csv ; Title: No title ; mergeHeaders ; includeFilterContext</p>
                <p>Applied filter by string (negative), identifier (negative), LdmExt.absoluteDate</p>
                <BackendProvider backend={backend}>
        <WorkspaceProvider workspace={workspace}>
                <Heatmap
                    measure={LdmExt.m_SnapshotBOP}
                    rows={LdmExt.a_Product}
                    columns={LdmExt.a_StageName}
                    drillableItems={[
                        HeaderPredicates.uriMatch(LdmExt.ProductUri),
                    ]}
                    onDrill={onDrillHandler}
                    filters = {[LdmExt.filterProduct,LdmExt.filterStageName,LdmExt.absoluteDate]}
                    onExportReady = {onExportReady}
                />
                <button onClick={doExport}>Export</button>
                </WorkspaceProvider>  
        </BackendProvider>
        </div>
        ))
        .add('CSV-Headline', () => (
            <div style={WRAPPER_STYLE}>
                <p>Format: csv ; Title: No title ; mergeHeaders ; includeFilterContext</p>
                <p>Applied filter by string (negative), identifier (negative), LdmExt.absoluteDate</p>
                <BackendProvider backend={backend}>
        <WorkspaceProvider workspace={workspace}>
                <Headline
                    primaryMeasure={LdmExt.m_SumDayToClose}
                    secondaryMeasure={LdmExt.m_SnapshotBOP}
                    drillableItems={[
                        HeaderPredicates.uriMatch(LdmExt.ProductUri),
                    ]}
                    onDrill={onDrillHandler}
                    filters = {[LdmExt.filterProduct,LdmExt.filterStageName,LdmExt.absoluteDate]}
                    onExportReady = {onExportReady}
                />
                <button onClick={doExport}>Export</button>
                </WorkspaceProvider>  
        </BackendProvider>
        </div>
        ))
                    
;

storiesOf('Export/SpecialChart', module)
        .add('Too Many', () => (
            <div style={WRAPPER_STYLE}>
                <p>Format: csv ; Title: No title ; mergeHeaders ; includeFilterContext</p>
                <p>Applied filter by string (negative), identifier (negative), LdmExt.absoluteDate</p>
                <BackendProvider backend={backend}>
        <WorkspaceProvider workspace={workspace}>
                <DonutChart
                    measures={[LdmExt.m_SumDayToClose,LdmExt.m_SnapshotBOP]}
                    viewBy={LdmExt.a_Product}
                    drillableItems={[
                        HeaderPredicates.uriMatch(LdmExt.ProductUri),
                     ]}
                     onDrill={onDrillHandler}
                    filters = {[LdmExt.filterProduct,LdmExt.filterStageName,LdmExt.absoluteDate]}
                    onExportReady = {onExportReady}
                />
                <button onClick={doExport}>Export</button>
                </WorkspaceProvider>  
        </BackendProvider>
        </div>
        ))
        .add('Can not computed', () => (
            <div style={WRAPPER_STYLE}>
                <p>Format: csv ; Title: No title ; mergeHeaders ; includeFilterContext</p>
                <p>Applied filter by string (negative), identifier (negative), LdmExt.absoluteDate</p>
                <p>ChangeAM</p>
                <BackendProvider backend={backend}>
        <WorkspaceProvider workspace={workspace}>
                <PivotTable
                    measures={[LdmExt.m_SnapshotBOP, LdmExt.m_ClosedBOP, LdmExt.m_Change_ClosedBOP_SnapshotBOP]}
                    rows={[LdmExt.a_Product, LdmExt.a_StageName]}
                    columns={[LdmExt.a_Activity]}
                    drillableItems={[
                        HeaderPredicates.uriMatch(LdmExt.ProductUri),
                     ]}
                     onDrill={onDrillHandler}
                    filters = {[LdmExt.filterProduct,LdmExt.filterStageName,LdmExt.absoluteDate]}
                    onExportReady = {onExportReady}
                />
                <button onClick={doExport}>Export</button>
                </WorkspaceProvider>  
        </BackendProvider>
        </div>
        ))
                    
;
