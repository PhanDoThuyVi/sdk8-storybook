//ntthuong
import React from 'react';
import { storiesOf } from '@storybook/react';
import '@gooddata/sdk-ui-charts/styles/css/main.css'; 
import '@gooddata/sdk-ui-pivot/styles/css/main.css';
import { Headline, ScatterPlot, BubbleChart, PieChart, DonutChart, Treemap, Heatmap} from '@gooddata/sdk-ui-charts';
import { PivotTable } from '@gooddata/sdk-ui-pivot';
import { BackendProvider } from "@gooddata/sdk-ui";
import { WorkspaceProvider } from "@gooddata/sdk-ui";
import bearFactory, { ContextDeferredAuthProvider } from "@gooddata/sdk-backend-bear";
import { projectId as workspace } from "../src/constants";
import {Ldm, LdmExt} from "../src/ldm";

const backend = bearFactory().withAuthentication(new ContextDeferredAuthProvider());
const WRAPPER_STYLE = { width: 1000, height: 500 };
storiesOf('Other Charts', module)
    .add('Headline', () => (
    <div style={WRAPPER_STYLE}>
        <h1>Headline only primary measure</h1>
        <BackendProvider backend={backend}>
        <WorkspaceProvider workspace={workspace}>
        <Headline
            primaryMeasure={Ldm.m_ClosedBOP}
            //secondaryMeasure={[Ldm.m_ClosedEOP]}
        />
        <h1>Headline only secondary Measure</h1>
        <Headline
            //primaryMeasure={[Ldm.m_ClosedBOP]}
            secondaryMeasure={Ldm.m_ClosedEOP}
        />
        <h1>Headline 2 measures</h1>
        <Headline
            primaryMeasure={Ldm.m_ClosedBOP}
            secondaryMeasure={Ldm.m_ClosedEOP}
        />
        </WorkspaceProvider>  
        </BackendProvider>
        </div>
    ))
    .add('Scatter Plot', () => (
    <div style={WRAPPER_STYLE}>
        <h1>Scatter plot 1x, 1y, 1Attr</h1>
        <BackendProvider backend={backend}>
            <WorkspaceProvider workspace={workspace}>
        <ScatterPlot
            xAxisMeasure={Ldm.m_Amount}
            yAxisMeasure={Ldm.m_AmountBOP}
            attribute={Ldm.a_Product}
            config={{
                dataLabels: {
                    visible: true
                },
                xaxis: {
                    rotation: '30'
                },
                legend: {
                    enabled: true,
                    position: 'bottom'
                }
            }}
        />
        <h1>Scatter plot 1x, 1Attr</h1>
        <ScatterPlot
            xAxisMeasure={Ldm.m_Amount}
            //yAxisMeasure={Ldm.m_AmountBOP}
            attribute={Ldm.a_Product}
            config={{
                dataLabels: {
                    visible: true
                },
                xaxis: {
                    rotation: '60'
                },
                legend: {
                    enabled: true,
                    position: 'bottom'
                }
            }}
        />
        <h1>Scatter plot 1y, 1Attr</h1>
        <ScatterPlot
            //xAxisMeasure={Ldm.m_Amount}
            yAxisMeasure={Ldm.m_AmountBOP}
            attribute={Ldm.a_Product}
            config={{
                dataLabels: {
                    visible: true
                },
                yaxis: {
                    rotation: '30'
                },
                legend: {
                    enabled: true,
                    position: 'bottom'
                }
            }}
        />
         </WorkspaceProvider>  
                </BackendProvider>
    </div>
    ))
    .add('Bubble Chart', () => (
    <div style={WRAPPER_STYLE}>
        <h1>Bubble chart 1x,1y,1s,1VB</h1>
        <BackendProvider backend={backend}>
            <WorkspaceProvider workspace={workspace}>
        <BubbleChart
            xAxisMeasure={Ldm.m_Amount}
            yAxisMeasure={Ldm.m_AmountBOP}
            size={Ldm.m_AvgWon}
            viewBy={Ldm.a_Product}
            config={{
                dataLabels: {
                    visible: true
                },
                rotation: '30',
                legend: {
                    enabled: true,
                    position: 'bottom'
                }
            }}
        />
        <h1>Bubble chart 1x,1s,1VB</h1>
        <BubbleChart
            xAxisMeasure={Ldm.m_Amount}
            //yAxisMeasure={Ldm.m_AmountBOP}
            size={Ldm.m_AvgWon}
            viewBy={Ldm.a_Product}
        />
        <h1>Bubble chart 1x,1y,1VB</h1>
        <BubbleChart
            xAxisMeasure={Ldm.m_Amount}
            yAxisMeasure={Ldm.m_AmountBOP}
            //size={Ldm.m_AvgWon}
            viewBy={Ldm.a_Product}
        />
        <h1>Bubble chart 1y,1s,1VB</h1>
        <BubbleChart
            //xAxisMeasure={Ldm.m_Amount}
            yAxisMeasure={Ldm.m_AmountBOP}
            size={Ldm.m_AvgWon}
            viewBy={Ldm.a_Product}
        />
         </WorkspaceProvider>  
                </BackendProvider>
    </div>
    ))
    .add('Pie chart', () => (
    <div style={WRAPPER_STYLE}>
        <h1>Pie chart 1M,1VB</h1>
        <BackendProvider backend={backend}>
            <WorkspaceProvider workspace={workspace}>
        <PieChart
            measures={[Ldm.m_ClosedBOP]}
            viewBy={Ldm.a_YearClosed}
            config={{
                dataLabels: {
                    visible: true
                }
            }}
        />
        
        <h1>Pie chart 1M</h1>
        <PieChart
            measures={[Ldm.m_ClosedBOP]}
            //viewBy={[Ldm.a_YearClosed]}
            config={{
                dataLabels: {
                    visible: true
                }
            }}
        />
        <h1>Pie chart 2M,1VB</h1>
        <PieChart
            measures={[Ldm.m_ClosedBOP,Ldm.m_ClosedEOP]}
            viewBy={Ldm.a_YearClosed}
            config={{
                dataLabels: {
                    visible: true
                }
            }}
        />
         </WorkspaceProvider>  
                </BackendProvider>
    </div>
    ))
    .add('Donut Chart', () => (
    <div style={WRAPPER_STYLE}>
        <h1>Donut chart 1M,1VB</h1>
        <BackendProvider backend={backend}>
            <WorkspaceProvider workspace={workspace}>
        <DonutChart
            measures={[Ldm.m_ClosedBOP]}
            viewBy={Ldm.a_YearClosed}
            config={{
                dataLabels: {
                    visible: true
                }
            }}
        />
        
        <h1>Donut chart 2M</h1>
        <DonutChart
            measures={[Ldm.m_ClosedBOP, Ldm.m_ClosedEOP]}
            //viewBy={Ldm.a_YearClosed}
            config={{
                dataLabels: {
                    visible: true
                }
            }}
        />
        <h1>Donut chart 2M,1VB</h1>
        <DonutChart
            measures={[Ldm.m_ClosedBOP, Ldm.m_ClosedEOP]}
            viewBy={Ldm.a_YearClosed}
            config={{
                dataLabels: {
                    visible: true
                }
            }}
        />
         </WorkspaceProvider>  
                </BackendProvider>
        </div>
    ))
    .add('Treemap Chart', () => (
    <div style={WRAPPER_STYLE}>
        <h1>-Treemap chart 1M,1VB,1SB</h1>
        <BackendProvider backend={backend}>
            <WorkspaceProvider workspace={workspace}>
        <Treemap
            measures={[Ldm.m_ClosedBOP]}
            viewBy={Ldm.a_YearClosed}
            segmentBy={Ldm.a_Product}
            config={{
                dataLabels: {
                    visible: true
                },
                legend: {
                    position: 'bottom'
                }
            }}
        />
        <h1>-Treemap chart 1M,1VB</h1>
        <Treemap
            measures={[Ldm.m_ClosedBOP]}
            viewBy={Ldm.a_YearClosed}
            //segmentBy={Ldm.a_Product}
            config={{
                dataLabels: {
                    visible: true
                },
                legend: {
                    position: 'top'
                }
            }}
        />
        <h1>-Treemap chart 1M,1SB</h1>
        <Treemap
            measures={[Ldm.m_ClosedBOP]}
            //viewBy={Ldm.a_YearClosed}
            segmentBy={Ldm.a_Product}
            config={{
                dataLabels: {
                    visible: true
                }
            }}
        />
         </WorkspaceProvider>  
                </BackendProvider>
    </div>
    ))
    .add('Heatmap Chart', () => (
    <div style={WRAPPER_STYLE}>
        <h1>Heatmap chart 1M,1VB,1SB</h1>
        <BackendProvider backend={backend}>
            <WorkspaceProvider workspace={workspace}>
        <Heatmap
            measure={Ldm.m_ClosedBOP}
            rows={Ldm.a_YearClosed}
            columns={Ldm.a_Product}
            config={{
                dataLabels: {
                    visible: true
                }
            }}
        />
        <h1>Heatmap chart 1M,only rows</h1>
        <Heatmap
            measure={Ldm.m_ClosedBOP}
            rows={Ldm.a_YearClosed}
            //columns={Ldm.a_Product}
            config={{
                dataLabels: {
                    visible: true
                }
            }}
        />
        <h1>Heatmap chart 1M,only columns</h1>
        <Heatmap
            measure={Ldm.m_ClosedBOP}
            //rows={Ldm.a_YearClosed}
            columns={Ldm.a_Product}
            config={{
                dataLabels: {
                    visible: true
                }
            }}
        />
         </WorkspaceProvider>  
                </BackendProvider>
    </div>
    ))
    .add('Pivot table', () => (
    <div style={WRAPPER_STYLE}>
        <h1>pivot table 1M,1row,1column</h1>
        <BackendProvider backend={backend}>
            <WorkspaceProvider workspace={workspace}>
        <PivotTable
            measures={[Ldm.m_ClosedBOP]}
            rows={[Ldm.a_YearClosed]}
            columns={[Ldm.a_Product]}
            
        />
        <h1>pivot table 1M,only rows</h1>
        <PivotTable
            measures={[Ldm.m_ClosedBOP]}
            rows={[Ldm.a_YearClosed]}
            //columns={[Ldm.a_Product]}
            
        />
        <h1>pivot table 1M,only columns</h1>
        <PivotTable
            measures={[Ldm.m_ClosedBOP]}
            //rows={[Ldm.a_YearClosed]}
            columns={[Ldm.a_Product]}
            
        />
        <h1>pivot table many measures, rows, columns</h1>
        <PivotTable
            measures={[Ldm.m_ClosedBOP, Ldm.m_Amount, Ldm.m_ClosedEOP, Ldm.m_SnapshotBOP]}
            rows={[Ldm.a_YearClosed, Ldm.a_Account]}
            columns={[Ldm.a_Product, Ldm.a_Department]}
            
        />
        <h1>Totals on pivot table </h1>
        <h1>Parent totals in pivot table many measures, rows, columns</h1>
        <PivotTable
            measures={[LdmExt.m_ClosedBOP, LdmExt.m_Amount]}
            rows={[LdmExt.a_YearClosed, Ldm.a_StageName]}
            columns={[Ldm.a_Product, Ldm.a_Department]}
            filters={[LdmExt.relativeDateYear, LdmExt.filterStageNameNegative]}
            totals={LdmExt.t_parentTotalsOnPivotTable}
        />
        <h1>Child totals in pivot table many measures, rows, columns</h1>
        <PivotTable
            measures={[LdmExt.m_ClosedBOP, LdmExt.m_Amount]}
            rows={[LdmExt.a_YearClosed, LdmExt.a_StageName]}
            columns={[Ldm.a_Product, Ldm.a_Department]}
            filters={[LdmExt.relativeDateYear, LdmExt.filterStageNameInterestShortList]}
            totals={LdmExt.t_childTotalsOnPivotTable}
     
        />
        <h1>Both parent and child totals in pivot table many measures, rows, columns, filter 2012 - Interest, ShortList</h1>
        <PivotTable
            measures={[LdmExt.m_ClosedBOP, LdmExt.m_Amount]}
            rows={[LdmExt.a_YearClosed, LdmExt.a_StageName]}
            columns={[LdmExt.a_Product, LdmExt.a_Department]}
            filters={[LdmExt.relativeDateYear, LdmExt.filterStageNameInterestShortList, LdmExt.filterProductExplorerGrammarPlus]}
            totals={LdmExt.t_bothParentandChildTotalsOnPivotTable}
        />
        <h1>Sorting on pivot table</h1>

        <h1>pivot table 1M,only rows + sort by YearClosed asc</h1>
        <PivotTable
            measures={[LdmExt.m_Amount]}
            rows={[LdmExt.a_YearClosed]}
            
            sortBy={[LdmExt.s_sortByYearClosedAsc]}
        />
        <h1>pivot table 1M,only rows + sort by Amount desc</h1>
        <PivotTable
            measures={[LdmExt.m_Amount]}
            rows={[Ldm.a_YearClosed]}
            
            sortBy={[LdmExt.s_sortByAmountDesc]}
        />
        
        <h1>Sort on pivot table contain parent and child totals values + apply sort Product DESC</h1>
        <p>Child totals should be hidden and Product sorted desc</p>
        <PivotTable
            measures={[LdmExt.m_ClosedBOP, LdmExt.m_Amount]}
            rows={[LdmExt.a_YearClosed, LdmExt.a_Product]}
            columns={[LdmExt.a_StageName, LdmExt.a_Department]}
            filters={[LdmExt.relativeDateYear, LdmExt.filterStageNameInterestShortList]}
            totals={LdmExt.t_bothParentandChildTotalsOnPivotTable}
            sortBy={[LdmExt.s_sortonProductDesc]}
        />
        <h1>sort by measure locators Amount - Grammar Plus DESC</h1>
        <PivotTable
            measures={[LdmExt.m_ClosedBOP, LdmExt.m_Amount]}
            rows={[LdmExt.a_YearClosed]}
            columns={[LdmExt.a_Product]}
            
            sortBy={[LdmExt.s_sortByAmountGrammarPlusDesc]}
        />

        <h1>sort by attribute Product aggregation desc</h1>
        <PivotTable
            measures={[LdmExt.m_ClosedBOP, LdmExt.m_Amount]}
            rows={[LdmExt.a_StageName]}
            columns={[LdmExt.a_Product]}
            
            sortBy={[LdmExt.s_sortbyProductTotal]}
        /> 
        
        <h1>Enable config aggregation on pivot table</h1>
        <PivotTable
            measures={[LdmExt.m_Amount, LdmExt.m_ClosedEOP]}
            rows={[LdmExt.a_Product]}
            columns={[LdmExt.a_YearClosed]}
            sortBy={[LdmExt.s_sortonProductDesc]}
            config={ {
                menu: {
                    aggregations: true,
                    aggregationsSubMenu: true
                }
            }
        }
        />

        <h1>Edge cases not support sorting</h1>
        <h3>sort on both YearClosed asc and Amount desc</h3>
        <PivotTable
            measures={[LdmExt.m_Amount]}
            rows={[LdmExt.a_YearClosed]}
            
            sortBy={[LdmExt.s_sortByYearClosedAsc, LdmExt.s_sortByAmountDesc]}
        />
        <h3>check multiple sorting - Amount Grammar Plus desc + StageName desc + Product desc aggregation</h3>
        <PivotTable
            measures={[LdmExt.m_ClosedBOP, LdmExt.m_Amount]}
            rows={[LdmExt.a_StageName, LdmExt.a_YearClosed]}
            columns={[LdmExt.a_Product]}
            
            sortBy={[LdmExt.s_sortByAmountGrammarPlusDesc, LdmExt.s_sortbyStageNameTotal, LdmExt.s_sortbyProductTotal]}
        /> 

        <h1>Filter pivot table</h1>
        <h1>Filter 2012 - Explorer + Grammar Plus</h1>
        <PivotTable
            measures={[Ldm.m_ClosedBOP, Ldm.m_Amount]}
            rows={[Ldm.a_YearClosed]}
            columns={[Ldm.a_Product]}
            filters={[LdmExt.filterProductExplorerGrammarPlus, LdmExt.relativeDateYear]}
            
        />
        <h1>Filter Amount greater than 5000000</h1>
        <PivotTable
            measures={[Ldm.m_ClosedBOP, Ldm.m_Amount]}
            rows={[Ldm.a_YearClosed]}
            columns={[Ldm.a_Product]}
            filters={[LdmExt.filterAmount_GreaterThan]}
            
        />
         </WorkspaceProvider>  
                </BackendProvider>
        </div>
    ));
