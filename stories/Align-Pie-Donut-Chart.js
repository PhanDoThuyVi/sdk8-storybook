//author: pdtvi
import React from 'react';
import { storiesOf } from '@storybook/react';
import '@gooddata/sdk-ui-charts/styles/css/main.css'; 
import { BarChart, PieChart, DonutChart, Headline, ScatterPlot, BubbleChart, Treemap, Heatmap, AreaChart, LineChart, ColumnChart, ComboChart } from '@gooddata/sdk-ui-charts';
import { PivotTable } from '@gooddata/sdk-ui-pivot';
import { InsightView } from '@gooddata/sdk-ui-ext';
import { BackendProvider } from "@gooddata/sdk-ui";
import { WorkspaceProvider } from "@gooddata/sdk-ui";
import bearFactory, { ContextDeferredAuthProvider } from "@gooddata/sdk-backend-bear";
import {projectId as workspace } from "../src/constants";
import {Ldm, LdmExt} from "../src/ldm";
import {HeaderPredicates } from '@gooddata/sdk-ui';

const backend = bearFactory().withAuthentication(new ContextDeferredAuthProvider());
const WRAPPER_STYLE = { width: 1200, height: 400 };

import { black } from 'ansi-colors';

function onDrillHandler(data){
    console.log(data.executionContext); 
    console.log(data.drillContext);
}

storiesOf('Align-PieDonut-Chart', module)
    .add('Pie Chart', () => (
        <div style={WRAPPER_STYLE}>
            <h1>1 measure, Align: bottom</h1>
            <BackendProvider backend={backend}>
<WorkspaceProvider workspace={workspace}>
            <div style={{ width: 400, height: 800, border: "solid 2px black" }}>
                <PieChart
                    measures={[Ldm.m_ClosedBOP]}
                    config={{
                        dataLabels: {
                            visible: true
                        },
                        chart: {
                            verticalAlign: 'bottom'
                        },
                        legend: {
                            enabled: true,
                            position: 'bottom'
                        },
                    }}
                />
            </div>
            <h1>N measures, Align: middle</h1>
            <div style={{ width: 400, height: 800, border: "solid 2px black" }}>
                <PieChart
                    measures={[Ldm.m_ClosedBOP, Ldm.m_SnapshotBOP]}
                    config={{
                        dataLabels: {
                            visible: true
                        },
                        chart: {
                            verticalAlign: 'middle'
                        },
                        legend: {
                            enabled: true,
                            position: 'left'
                        }
                    }}
                />
            </div>
            <h1>1 measure, 1 viewBy, Align: middle</h1>
            <div style={{ width: 400, height: 800, border: "solid 2px black" }}>
                <PieChart
                    measures={[Ldm.m_ClosedBOP]}
                    viewBy={Ldm.a_YearClosed}
                    config={{
                        dataLabels: {
                            visible: true
                        },
                        chart: {
                            verticalAlign: 'middle'
                        },
                        legend: {
                            enabled: true,
                            position: 'right'
                        },
                    }}
                />
            </div>
            <h1>Filter local, Align: top</h1>
            <div style={{ width: 400, height: 800, border: "solid 2px black" }}>
                <PieChart
                    measures={[Ldm.m_ClosedBOP]}
                    viewBy={Ldm.a_YearClosed}
                    filters={[LdmExt.filterProductExplorerGrammarPlus]}
                    config={{
                        dataLabels: {
                            visible: true
                        },
                        chart: {
                            verticalAlign: 'top'
                        },
                        legend: {
                            enabled: true,
                            position: 'right'
                        },
                    }}
                />
            </div>
            <h1>Invalid cases</h1>
            <h1>No data</h1>
            <div style={{ width: 400, height: 800, border: "solid 2px black" }}>
                <PieChart
                    measures={[Ldm.m_ClosedBOP, Ldm.m_ClosedEOP]}
                    viewBy={Ldm.a_YearClosed}
                    filters={[LdmExt.filterProductTouchAll]}
                    config={{
                        dataLabels: {
                            visible: true
                        },
                        chart: {
                            verticalAlign: 'top'
                        }
                    }}
                />
            </div>
            <h1>Many data</h1>
            <div style={{ width: 400, height: 800, border: "solid 2px black" }}>
                <PieChart
                    measures={[Ldm.m_ClosedBOP]}
                    viewBy={Ldm.a_Account}
                    config={{
                        dataLabels: {
                            visible: true
                        },
                        chart: {
                            verticalAlign: 'top'
                        }
                    }}
                />
            </div>
            <h1>Negative measure</h1>
            <div style={{ width: 400, height: 800, border: "solid 2px black" }}>
                <PieChart
                    measures={[Ldm.m_AmountNegative]}
                    viewBy={Ldm.a_Product}
                    config={{
                        dataLabels: {
                            visible: true
                        },
                        chart: {
                            verticalAlign: 'top'
                        }
                    }}
                />
            </div>
            </WorkspaceProvider>  
</BackendProvider>
        </div>
    ))

    .add('Donut Chart', () => (
        <div style={WRAPPER_STYLE}>
            <h1>1 measure, 1 viewBy, Align: top</h1>
            <BackendProvider backend={backend}>
<WorkspaceProvider workspace={workspace}>
            <div style={{ width: 400, height: 800, border: "solid 2px black" }}>
                <DonutChart
                    measures={[Ldm.m_ClosedBOP]}
                    viewBy={Ldm.a_YearClosed}
                    config={{
                        dataLabels: {
                            visible: true
                        },
                        chart: {
                            verticalAlign: 'top'
                        }
                    }}
                />
            </div>
            <h1>2 measures, Align: middle</h1>
            <div style={{ width: 400, height: 800, border: "solid 2px black" }}>
                <DonutChart
                    measures={[Ldm.m_ClosedBOP, Ldm.m_ClosedEOP]}
                    config={{
                        dataLabels: {
                            visible: true
                        },
                        chart: {
                            verticalAlign: 'middle'
                        }
                    }}
                />
            </div>
            <h1>2 measures, 1 viewBy, Align: bottom</h1>
            <div style={{ width: 400, height: 800, border: "solid 2px black" }}>
                <DonutChart
                    measures={[Ldm.m_ClosedBOP, Ldm.m_ClosedEOP]}
                    viewBy={Ldm.a_YearClosed}
                    config={{
                        dataLabels: {
                            visible: true
                        },
                        chart: {
                            verticalAlign: 'bottom'
                        }
                    }}
                />
            </div>
            {/* <h1>many measures, Align: top</h1>
            <div style={{ width: 400, height: 800, border: "solid 2px black" }}>
                <DonutChart
                    measures={[Ldm.m_ClosedBOP, LdmExt.m_Amount, Ldm.m_AmountBOP, LdmExt.m_Amount1, LdmExt.m_AmountNullFormat, Ldm.m_AvgWon]}
                    config={{
                        dataLabels: {
                            visible: true
                        },
                        chart: {
                            verticalAlign: 'top'
                        }
                    }}
                />
            </div> */}
            {/* s */}
            </WorkspaceProvider>  
</BackendProvider>
        </div>
    ))
    .add('InsightView', () => (
        <div style={WRAPPER_STYLE}>
            <h1>Pie chart - Not config, Align: default (middle)</h1>
            <BackendProvider backend={backend}>
<WorkspaceProvider workspace={workspace}>
            <div style={{ width: 400, height: 800, border: "solid 2px black" }}>
                <InsightView
                    insight={Ldm.Insights.AlignPieDonutChart1}
                />
            </div>
            <h1>test sd-1045</h1>
            <div style={{ width: 400, height: 800, border: "solid 2px black" }}>
                <InsightView
                    insight={Ldm.Insights.sd1045}
                />
            </div>
            <h1>Pie chart - Config on sdk, Align: bottom</h1>
            <div style={{ width: 400, height: 800, border: "solid 2px black" }}>
                <InsightView
                    insight={Ldm.Insights.AlignPieDonutChart1}
                    config={{
                        dataLabels: {
                            visible: true
                        },
                        chart: {
                            verticalAlign: 'bottom'
                        }
                    }}
                />
            </div>
            <h1>Pie chart - Ratio, legend right, custom color, Align: top</h1>
            <div style={{ width: 400, height: 800, border: "solid 2px black" }}>
                <InsightView
                    insight={Ldm.Insights.AlignPieDonutChart2}
                    config={{
                        dataLabels: {
                            visible: true
                        },
                        chart: {
                            verticalAlign: 'top'
                        }
                    }}
                />
            </div>
            <h1>Pie chart - Legend top, Align: top</h1>
            <div style={{ width: 400, height: 800, border: "solid 2px black" }}>
                <InsightView
                    insight={Ldm.Insights.AlignPieDonutChart3}
                    config={{
                        dataLabels: {
                            visible: true
                        },
                        chart: {
                            verticalAlign: 'top'
                        }
                    }}
                />
            </div>
            <h1>Pie chart - Legend bottom, filter combine, Align: bottom</h1>
            <div style={{ width: 400, height: 800, border: "solid 2px black" }}>
                <InsightView
                    insight={Ldm.Insights.AlignPieDonutChart4}
                    config={{
                        dataLabels: {
                            visible: true
                        },
                        chart: {
                            verticalAlign: 'bottom'
                        }
                    }}
                />
            </div>
            <h1>Pie chart - Many measures, Align: top</h1>
            <div style={{ width: 400, height: 800, border: "solid 2px black" }}>
                <InsightView
                    insight={Ldm.Insights.AlignPieDonutChart5}
                    config={{
                        dataLabels: {
                            visible: true
                        },
                        chart: {
                            verticalAlign: 'top'
                        },
                        legend: {
                            enabled: true,
                            position: 'bottom'
                        }
                    }}
                />
            </div>
            <h1>Pie chart - Metric format, Align: top</h1>
            <div style={{ width: 400, height: 800, border: "solid 2px black" }}>
                <InsightView
                    insight={Ldm.Insights.AlignPieDonutChart6}
                    config={{
                        dataLabels: {
                            visible: true
                        },
                        chart: {
                            verticalAlign: 'top'
                        }
                    }}
                />
            </div>

            <h1>Pie chart - Protected attribute, Align: bottom</h1>
            <div style={{ width: 400, height: 800, border: "solid 2px black" }}>
                <InsightView
                    insight={Ldm.Insights.AlignPieDonutChart7}
                    config={{
                        dataLabels: {
                            visible: true
                        },
                        chart: {
                            verticalAlign: 'bottom'
                        },
                        legend: {
                            enabled: true,
                            position: 'top'
                        }
                    }}
                />
            </div>
            </WorkspaceProvider>  
</BackendProvider>
        </div>

    ))
    .add('Other charts not affected align vertical', () => (
        <div style={WRAPPER_STYLE}>
            <h1>Column Chart, Align: not apply</h1>
            <BackendProvider backend={backend}>
            <WorkspaceProvider workspace={workspace}>
            <div style={{ width: 800, height: 1200, border: "solid 2px black" }}>
                <ColumnChart
                    measures={[LdmExt.m_SumDayToClose]}
                    viewBy={[Ldm.a_Product, Ldm.a_StageName]}
                    stackBy={Ldm.a_StageName}
                    config={{
                        chart: {
                            verticalAlign: 'bottom'
                        },
                        legend: {
                            enabled: true,
                            position: 'bottom',
                        }
                    }}
                />
            </div>
            <h1>Bar Chart, Align: not apply</h1>
            <div style={{ width: 800, height: 1200, border: "solid 2px black" }}>
                <BarChart
                    measures={[LdmExt.m_SumDayToClose]}
                    viewBy={[Ldm.a_Product]}
                    stackBy={Ldm.a_StageName}
                    config={{
                        stackMeasuresToPercent: true,
                        chart: {
                            verticalAlign: 'bottom'
                        },
                        legend: {
                            enabled: true,
                            position: 'left',
                        }
                    }}
                    drillableItems={[
                        HeaderPredicates.identifierMatch('label.stage.name.stagename')
                    ]}
                    onDrill={onDrillHandler}
                />
            </div>
            <h1>Line chart, Align: not apply</h1>
            <div style={{ width: 800, height: 1200, border: "solid 2px black" }}>
                <LineChart
                    measures={[LdmExt.m_ClosedBOP, Ldm.m_ClosedEOP, LdmExt.m_SnapshotBOP, Ldm.m_SnapshotEOP]}
                    trendBy={Ldm.a_YearClosed}
                    config={{
                        secondary_yaxis: {
                            measures: ['ClosedBOP', 'SnapshotBOP']
                        },
                        dataLabels: {
                            visible: true
                        },
                        chart: {
                            verticalAlign: 'bottom'
                        },
                        legend: {
                            enabled: true,
                            position: 'right',
                        }
                    }}
                />
            </div>
            <h1>Area Chart, Align: not apply</h1>
            <div style={{ width: 800, height: 1200, border: "solid 2px black" }}>
                <AreaChart
                    measures={[LdmExt.m_OpenOpps, LdmExt.m_CountStageHistory, LdmExt.m_changeOfOpenOppsAndCountStageHistory, LdmExt.m_ratioOfOpenOppsAndCountStageHistory]}
                    viewBy={Ldm.a_Product}
                    config={{
                        stackMeasuresToPercent: true,
                        secondary_yaxis: {
                            measures: ['CountStageHistory', 'OpenOpps'],
                            rotation: '180',
                            min: 0
                        },
                        chart: {
                            verticalAlign: 'bottom'
                        }

                    }}
                    drillableItems={[
                        HeaderPredicates.composedFromUri(LdmExt.CountStageHistoryUri),
                        HeaderPredicates.uriMatch(LdmExt.ProductUri)
                    ]}
                    onDrill={onDrillHandler}
                />
            </div>
            <h1>Combo Chart, Align: not apply</h1>
            <div style={{ width: 800, height: 1200, border: "solid 2px black" }}>
                <ComboChart
                    primaryMeasures={[Ldm.m_ClosedBOP, Ldm.m_ClosedEOP]}
                    secondaryMeasures={[Ldm.m_SnapshotBOP, Ldm.m_SnapshotEOP]}
                    viewBy={Ldm.a_YearClosed}
                    config={{
                        stackMeasuresToPercent: true,
                        chart: {
                            verticalAlign: 'bottom'
                        },
                        primaryChartType: 'area', // string
                        secondaryChartType: 'area'
                    }
                    }
                />
            </div>
            <h1>Headline, Align: not apply</h1>
            <div style={{ width: 400, height: 800, border: "solid 2px black" }}>
                <Headline
                    primaryMeasure={Ldm.m_ClosedBOP}
                    secondaryMeasure={Ldm.m_ClosedEOP}
                    config={{
                        chart:
                        {
                            verticalAlign: 'bottom'
                        }
                    }}
                />
            </div>
            <h1>Scatter plot, Align: not apply</h1>
            <div style={{ width: 800, height: 1200, border: "solid 2px black" }}>
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
                        },
                        chart:
                        {
                            verticalAlign: 'bottom'
                        }
                    }}
                />
            </div>
            <h1>Bubble chart, Align: not apply</h1>
            <div style={{ width: 800, height: 1200, border: "solid 2px black" }}>
                <BubbleChart
                    xAxisMeasure={LdmExt.m_Amount}
                    yAxisMeasure={LdmExt.m_AmountBOP}
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
                        },
                        chart:
                        {
                            verticalAlign: 'bottom'
                        }
                    }}
                />
            </div>
            <h1>Treemap, Align: not apply</h1>
            <div style={{ width: 800, height: 1200, border: "solid 2px black" }}>
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
                        },
                        chart:
                        {
                            verticalAlign: 'bottom'
                        }
                    }}
                />
            </div>
            <h1>Heatmap, Align: not apply</h1>
            <div style={{ width: 800, height: 1200, border: "solid 2px black" }}>
                <Heatmap
                    measure={Ldm.m_ClosedBOP}
                    rows={Ldm.a_YearClosed}
                    columns={Ldm.a_Product}
                    config={{
                        dataLabels: {
                            visible: true
                        },
                        chart:
                        {
                            verticalAlign: 'bottom'
                        }
                    }}
                />
            </div>
            <h1>Pivot table, Align: not apply</h1>
            <div style={{ width: 800, height: 1200, border: "solid 2px black" }}>
                <PivotTable
                    measures={[Ldm.m_AvgWon, Ldm.m_Amount]}
                    rows={[Ldm.a_StageName]}
                    columns={[Ldm.a_Product]}
                    config={{
                        chart:
                        {
                            verticalAlign: 'bottom'
                        }

                    }}
                />
            </div>
            </WorkspaceProvider>  
</BackendProvider>
        </div>
    ))
    .add('invalid values of position parameter', () => (
        <div style={WRAPPER_STYLE}>
            <h1>invalid values of position parameter, check Align: default (middle) </h1>
            <BackendProvider backend={backend}>
<WorkspaceProvider workspace={workspace}>
            <div style={{ width: 400, height: 800, border: "solid 2px black" }}>
                <PieChart
                    measures={[Ldm.m_ClosedBOP, Ldm.m_AmountBOP]}
                    config={{
                        dataLabels: {
                            visible: true
                        },
                        chart: {
                            verticalAlign: 'BOTTOM'
                        },
                        legend: {
                            enabled: true,
                            position: 'bottom'
                        },
                    }}
                />
            </div>
            </WorkspaceProvider>  
</BackendProvider>
        </div>
    ));
