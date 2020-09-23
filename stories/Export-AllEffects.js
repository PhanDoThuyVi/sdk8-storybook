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

function onDrillHandler(data){
    console.log(data.executionContext); 
    console.log(data.drillContext);
}

function onExportReady(execution: any){
	exportResult = execution;
}

async function doExport(customTitle: any){
    console.log(customTitle);
	const result = await exportResult({
		format: 'xlsx',
		title: customTitle,
		includeFilterContext: true,
		mergeHeaders: true
	});
	window.open(result.uri);
}

storiesOf('Export/CustomTitle-mergeHeaders-includeFilterContext', module)
    .add('ComboChart', () => (
	<div style={WRAPPER_STYLE}>
        <BackendProvider backend={backend}>
        <WorkspaceProvider workspace={workspace}>
        <p>Format: xslx ; Title: Custom ; includeFilterContext</p>
        <p>Applied filter by string, identifier, relativeDateYear</p>
        <p>Title too long, file name will be auto cut: áàảãạâăắằẳẵặấầẩẫậíìỉĩịýỳỷỹỵéèẻẽẹêếềểễệóòỏõọôốồổỗộơớờở</p>
        <img width="800" src="https://content.screencast.com/users/NgocBich1990/folders/Jing/media/9519925d-e15a-4fb6-813e-21d8b93d45b1/2019-07-12_1516.png" />    
        <ComboChart
            primaryMeasures={[LdmExt.m_ClosedBOP, Ldm.m_ClosedEOP, LdmExt.m_SumDayToClose]}
            secondaryMeasures={[LdmExt.m_SnapshotBOP, LdmExt.m_POP_SumDayToClose]}
            viewBy={[LdmExt.a_Product, LdmExt.a_StageName]}
            config={{
                primaryChartType: 'column',
                secondaryChartType: 'line'
            }}
            drillableItems={[
                HeaderPredicates.uriMatch(LdmExt.ProductCompuSciUri),
             ]}
             onDrill={onDrillHandler}
			filters = {[LdmExt.filterProduct,LdmExt.filterProductNegative,LdmExt.filterStageName,LdmExt.filterStageNameNegative,LdmExt.relativeDateYear]}
			onExportReady = {onExportReady}
        />
		<button onClick={() => doExport('áàảãạâăắằẳẵặấầẩẫậíìỉĩịýỳỷỹỵéèẻẽẹêếềểễệóòỏõọôốồổỗộơớờở')}>Export</button>
        </WorkspaceProvider>  
        </BackendProvider>
    </div>
    ))
    .add('Line', () => (
        <div style={WRAPPER_STYLE}>
            <BackendProvider backend={backend}>
            <WorkspaceProvider workspace={workspace}>
            <p>Format: xslx ; Title: ớờởỡợúùủũụưứừửữựηνικόαλφάβητñçůžÜäö.-_ ; includeFilterContext; showFilters (ignore) [filterProduct, fixtures.absoluteDate, relativeDate]</p>
            <p>Applied filter by string, identifier, relativeDateMonth</p>
            <img width="800" src="https://content.screencast.com/users/NgocBich1990/folders/Jing/media/d81c2efc-4fd7-4f34-9c1b-8a315d24ab9b/export-case2.png" /> 
            <LineChart
                measures={[LdmExt.m_SumDayToClose, LdmExt.m_ClosedBOP, LdmExt.m_SnapshotBOP, LdmExt.m_POP_SumDayToClose, LdmExt.m_Difference_ClosedBOP_SnapshotBOP, LdmExt.m_Multiplication_ClosedBOP_SnapshotBOP, LdmExt.m_Ratio_ClosedBOP_SnapshotBOP]}
                trendBy={LdmExt.a_Product}
                drillableItems={[
                    HeaderPredicates.uriMatch(LdmExt.ProductCompuSciUri),
                 ]}
                 onDrill={onDrillHandler}
                filters = {[LdmExt.filterProduct,LdmExt.filterProductNegative,LdmExt.filterStageName,LdmExt.filterStageNameNegative,LdmExt.relativeDateMonth]}
                onExportReady = {onExportReady}
            />
            <button onClick={() => doExport('ớờởỡợúùủũụưứừửữựηνικόαλφάβητñçůžÜäö.-_')}>Export</button>
            </WorkspaceProvider>  
            </BackendProvider>
            </div>
        ))
        .add('Colunm', () => (
            <div style={WRAPPER_STYLE}>
            <BackendProvider backend={backend}>
            <WorkspaceProvider workspace={workspace}>
                <p>Format: xslx ; Title: Hans特殊字符 ; includefixtures.filterContext; showFilters (ignore) [fixtures.filterProduct, fixtures.absoluteDate, relativeDate]</p>
                <p>Applied filter by string, identifier, relativeDateQuater</p>
                <p>Stack% and dual axis</p>
                <img width="800" src="https://content.screencast.com/users/NgocBich1990/folders/Jing/media/c7886c69-9671-47ad-b7f4-29a251fd3f6e/export-case3.png" />
                <ColumnChart
                    measures={[LdmExt.m_SumDayToClose, LdmExt.m_ClosedBOP, LdmExt.m_SnapshotBOP, LdmExt.m_POP_SumDayToClose, LdmExt.m_Difference_ClosedBOP_SnapshotBOP, LdmExt.m_Multiplication_ClosedBOP_SnapshotBOP, LdmExt.m_Ratio_ClosedBOP_SnapshotBOP]}
                    viewBy={[LdmExt.a_Product, LdmExt.a_StageName]}
                    config={{
                        stackMeasuresToPercent: true,
                        secondary_yaxis: {
                            measures: ['SumDayToClose']
                        }
                    }}
                    drillableItems={[
                        HeaderPredicates.uriMatch(LdmExt.ProductCompuSciUri),
                     ]}
                     onDrill={onDrillHandler}
                    filters = {[LdmExt.filterProduct,LdmExt.filterProductNegative,LdmExt.filterStageName,LdmExt.filterStageNameNegative,LdmExt.relativeDateQuater]}
                    onExportReady = {onExportReady}
                />
                <button onClick={() => doExport('Hans特殊字符')}>Export</button>
                </WorkspaceProvider>  
                </BackendProvider>
                </div>
            ))
            .add('Bar', () => (
                <div style={WRAPPER_STYLE}>
                <BackendProvider backend={backend}>
                <WorkspaceProvider workspace={workspace}>
                    <p>Format: xslx ; Title: Japanダイヤモンド玉 ; includeFilterContext; showFilters (ignore) [filterProduct, fixtures.absoluteDate, relativeDate]</p>
                    <p>Applied filter by string, identifier, relativeDateWeek</p>
                    <p>Stack measures and dual axis</p>
                    <img width="800" src="https://content.screencast.com/users/NgocBich1990/folders/Jing/media/1388a023-49a9-4357-ab9f-15161c854f9a/export-case4.png" />
                    <BarChart
                        measures={[LdmExt.m_SumDayToClose, LdmExt.m_ClosedBOP, LdmExt.m_SnapshotBOP, LdmExt.m_POP_SumDayToClose, LdmExt.m_Difference_ClosedBOP_SnapshotBOP, LdmExt.m_Multiplication_ClosedBOP_SnapshotBOP, LdmExt.m_Ratio_ClosedBOP_SnapshotBOP]}
                        viewBy={[LdmExt.a_Product, LdmExt.a_StageName]}
                        config={{
                            stackMeasures: true,
                            secondary_yaxis: {
                                measures: ['SumDayToClose']
                            }
                        }}
                        drillableItems={[
                            HeaderPredicates.uriMatch(LdmExt.ProductCompuSciUri),
                         ]}
                         onDrill={onDrillHandler}
                        filters = {[LdmExt.filterProduct,LdmExt.filterProductNegative,LdmExt.filterStageName,LdmExt.filterStageNameNegative,LdmExt.relativeDateWeek]}
                        onExportReady = {onExportReady}
                    />
                    <button onClick={() => doExport('Japanダイヤモンド玉')}>Export</button>
                    </WorkspaceProvider>  
                </BackendProvider>
                </div>
                ))
                .add('Area', () => (
                    <div style={WRAPPER_STYLE}>
                    <BackendProvider backend={backend}>
                    <WorkspaceProvider workspace={workspace}>
                        <p>Format: xslx ; Title: More Special Letters ~!@#$%^*()_+`-=[]\|;":?,.\'/ ; includeFilterContext; showFilters (ignore) [filterProduct, fixtures.absoluteDate, relativeDate]</p>
                        <p>Applied filter by string, identifier, relativeDateWeekUs</p>
                        <p>ShowIn%</p>
            
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
                            filters = {[LdmExt.filterProduct,LdmExt.filterProductNegative,LdmExt.filterStageName,LdmExt.filterStageNameNegative,LdmExt.relativeDateWeekUs]}
                            onExportReady = {onExportReady}
                        />
                        <button onClick={() => doExport('More Special Letters ~!@#$%^&*()_+`-=[]|;":<>?,./')}>Export</button>
                        </WorkspaceProvider>  
                </BackendProvider>
                    </div>
                    ))
        .add('Bubble', () => (
            <div style={WRAPPER_STYLE}>
            <BackendProvider backend={backend}>
            <WorkspaceProvider workspace={workspace}>
                <p>Format: xslx ; Title: Custom ; includeFilterContext; showFilters (ignore) [filterProduct, fixtures.absoluteDate, relativeDate]</p>
                <p>Applied filter by string (positive), identifier (positive), fixtures.absoluteDate</p>
            
                <BubbleChart
                    xAxisMeasure={LdmExt.m_SumDayToClose}
                    yAxisMeasure={LdmExt.m_SnapshotBOP}
                    size={LdmExt.m_ClosedBOP}
                    viewBy={LdmExt.a_Product}
                    drillableItems={[
                        HeaderPredicates.uriMatch(LdmExt.ProductUri),
                    ]}
                    onDrill={onDrillHandler}
                    filters = {[LdmExt.filterProduct,LdmExt.filterProductNegative,LdmExt.filterStageName,LdmExt.filterStageNameNegative,LdmExt.absoluteDate]}
                    onExportReady = {onExportReady}
                />
            <button onClick={() => doExport('Custom Title')}>Export</button>
            </WorkspaceProvider>  
                </BackendProvider>
                </div>
        ))
        .add('ScatterPlot', () => (
            <div style={WRAPPER_STYLE}>
            <BackendProvider backend={backend}>
            <WorkspaceProvider workspace={workspace}>
                <p>Format: xslx ; Title: Custom ; includeFilterContext; showFilters (ignore) [filterProduct, fixtures.absoluteDate, relativeDate]</p>
                <p>Applied filter by string (positive), identifier (positive), fixtures.absoluteDate</p>
    
                <ScatterPlot
                    xAxisMeasure={LdmExt.m_SumDayToClose}
                    yAxisMeasure={LdmExt.m_SnapshotBOP}
                    size={LdmExt.m_ClosedBOP}
                    attribute={LdmExt.a_Product}
                    drillableItems={[
                        HeaderPredicates.uriMatch(LdmExt.ProductUri),
                     ]}
                     onDrill={onDrillHandler}
                    filters = {[LdmExt.filterProduct,LdmExt.filterProductNegative,LdmExt.filterStageName,LdmExt.filterStageNameNegative,LdmExt.absoluteDate]}
                    onExportReady = {onExportReady}
                />
                <button onClick={() => doExport('Custom Title')}>Export</button>
                </WorkspaceProvider>  
                </BackendProvider>
                </div>
        ))
        .add('Donut', () => (
            <div style={WRAPPER_STYLE}>
            <BackendProvider backend={backend}>
            <WorkspaceProvider workspace={workspace}>
                <p>Format: xslx ; Title: Custom ; includeFilterContext; showFilters (ignore) [filterProduct, fixtures.absoluteDate, relativeDate]</p>
                <p>Applied filter by string (positive), identifier (positive), fixtures.absoluteDate</p>
    
                <DonutChart
                    measures={[LdmExt.m_SumDayToClose]}
                    viewBy={LdmExt.a_Product}
                    drillableItems={[
                        HeaderPredicates.uriMatch(LdmExt.ProductUri),
                     ]}
                     onDrill={onDrillHandler}
                    filters = {[LdmExt.filterProduct,LdmExt.filterProductNegative,LdmExt.filterStageName,LdmExt.filterStageNameNegative,LdmExt.absoluteDate]}
                    onExportReady = {onExportReady}
                />
                <button onClick={() => doExport('Custom Title')}>Export</button>
                </WorkspaceProvider>  
                </BackendProvider>
                </div>
        ))
        .add('Pie', () => (
            <div style={WRAPPER_STYLE}>
            <BackendProvider backend={backend}>
            <WorkspaceProvider workspace={workspace}>
                <p>Format: xslx ; Title: Custom ; includeFilterContext; showFilters (ignore) [filterProduct, fixtures.absoluteDate, relativeDate]</p>
                <p>Applied filter by string (positive), identifier (positive), fixtures.absoluteDate</p>
    
                <PieChart
                    measures={[LdmExt.m_SumDayToClose,LdmExt.m_SnapshotBOP]}
                    drillableItems={[
                        HeaderPredicates.uriMatch(LdmExt.ProductUri),
                     ]}
                     onDrill={onDrillHandler}
                    filters = {[LdmExt.filterProduct,LdmExt.filterProductNegative,LdmExt.filterStageName,LdmExt.filterStageNameNegative,LdmExt.absoluteDate]}
                    onExportReady = {onExportReady}
                />
                <button onClick={() => doExport('Custom Title')}>Export</button>
                </WorkspaceProvider>  
                </BackendProvider>
                </div>
        ))
        .add('Pivot', () => (
            <div style={WRAPPER_STYLE}>
            <BackendProvider backend={backend}>
            <WorkspaceProvider workspace={workspace}>
                <p>Format: xslx ; Title: Custom ; includeFilterContext; showFilters (ignore) [filterProduct, fixtures.absoluteDate, relativeDate]</p>
                <p>Applied filter by string (positive), identifier (positive), fixtures.absoluteDate</p>
                <p>ChangeAM</p>
    
                <PivotTable
                    measures={[LdmExt.m_SnapshotBOP, LdmExt.m_ClosedBOP, LdmExt.m_Change_ClosedBOP_SnapshotBOP]}
                    rows={[LdmExt.a_Product, LdmExt.a_StageName]}
                    columns={[LdmExt.a_Department]}
                    drillableItems={[
                        HeaderPredicates.uriMatch(LdmExt.ProductUri),
                     ]}
                     onDrill={onDrillHandler}
                    filters = {[LdmExt.filterProduct,LdmExt.filterProductNegative,LdmExt.filterStageName,LdmExt.filterStageNameNegative,LdmExt.absoluteDate]}
                    onExportReady = {onExportReady}
                />
                <button onClick={() => doExport('Custom Title')}>Export</button>
                </WorkspaceProvider>  
                </BackendProvider>
                </div>
        ))
        .add('Treemap', () => (
            <div style={WRAPPER_STYLE}>
            <BackendProvider backend={backend}>
            <WorkspaceProvider workspace={workspace}>
                <p>Format: xslx ; Title: Custom ; includeFilterContext; showFilters (ignore) [filterProduct, fixtures.absoluteDate, relativeDate]</p>
                <p>Applied filter by string (positive), identifier (positive), fixtures.absoluteDate</p>
                <p>ChangeAM</p>

                <Treemap
                    measures={[LdmExt.m_SnapshotBOP, LdmExt.m_ClosedBOP, LdmExt.m_Change_ClosedBOP_SnapshotBOP]}
                    viewBy={LdmExt.a_Product}
                    segmentBy={LdmExt.a_StageName}
                    drillableItems={[
                        HeaderPredicates.uriMatch(LdmExt.ProductUri),
                     ]}
                     onDrill={onDrillHandler}
                    filters = {[LdmExt.filterProduct,LdmExt.filterProductNegative,LdmExt.filterStageName,LdmExt.filterStageNameNegative,LdmExt.absoluteDate]}
                    onExportReady = {onExportReady}
                />
                <button onClick={() => doExport('Custom Title')}>Export</button>
                </WorkspaceProvider>  
                </BackendProvider>
                </div>
        ))
        .add('HeatMap', () => (
            <div style={WRAPPER_STYLE}>
            <BackendProvider backend={backend}>
            <WorkspaceProvider workspace={workspace}>
                <p>Format: xslx ; Title: Custom ; includeFilterContext; showFilters (ignore) [filterProduct, fixtures.absoluteDate, relativeDate]</p>
                <p>Applied filter by string (positive), identifier (positive), fixtures.absoluteDate</p>
    
                <Heatmap
                    measure={LdmExt.m_SnapshotBOP}
                    rows={LdmExt.a_Product}
                    columns={LdmExt.a_StageName}
                    drillableItems={[
                        HeaderPredicates.uriMatch(LdmExt.ProductUri),
                    ]}
                    onDrill={onDrillHandler}
                    filters = {[LdmExt.filterProduct,LdmExt.filterProductNegative,LdmExt.filterStageName,LdmExt.filterStageNameNegative,LdmExt.absoluteDate]}
                    onExportReady = {onExportReady}
                />
                <button onClick={() => doExport('Custom Title')}>Export</button>
                </WorkspaceProvider>  
                </BackendProvider>
                </div>
        ))
        .add('Headline', () => (
            <div style={WRAPPER_STYLE}>
            <BackendProvider backend={backend}>
            <WorkspaceProvider workspace={workspace}>
                <p>Format: xslx ; Title: Custom ; includeFilterContext; showFilters (ignore) [filterProduct, fixtures.absoluteDate, relativeDate]</p>
                <p>Applied filter by string (positive), identifier (positive), fixtures.absoluteDate</p>
    
                <Headline
                    primaryMeasure={LdmExt.m_SumDayToClose}
                    secondaryMeasure={LdmExt.m_SnapshotBOP}
                    drillableItems={[
                        HeaderPredicates.uriMatch(LdmExt.ProductUri),
                    ]}
                    onDrill={onDrillHandler}
                    filters = {[LdmExt.filterProduct,LdmExt.filterProductNegative,LdmExt.filterStageName,LdmExt.filterStageNameNegative,LdmExt.absoluteDate]}
                    onExportReady = {onExportReady}
                />
                <button onClick={() => doExport('Custom Title')}>Export</button>
                </WorkspaceProvider>  
                </BackendProvider>
                </div>
        ))
                    
;