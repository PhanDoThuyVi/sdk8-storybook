//author: pdtvi
import React from 'react';

import { storiesOf } from '@storybook/react';
import '@gooddata/sdk-ui-charts/styles/css/main.css'; 
import { AreaChart, ColumnChart, BarChart, LineChart, ComboChart, Headline, PivotTable, ScatterPlot, BubbleChart, Heatmap, Treemap, PieChart, DonutChart } from '@gooddata/sdk-ui-charts';

import { InsightView } from '@gooddata/sdk-ui-ext';
import { BackendProvider } from "@gooddata/sdk-ui";
import { WorkspaceProvider } from "@gooddata/sdk-ui";
import bearFactory, { ContextDeferredAuthProvider } from "@gooddata/sdk-backend-bear";
import { projectId as workspace } from "../src/constants";
import {Ldm, LdmExt} from "../src/ldm";

const backend = bearFactory().withAuthentication(new ContextDeferredAuthProvider());

const WRAPPER_STYLE = { width: 1200, height: 400 };

storiesOf('Axis name and position', module)

    .add('1 measure', () => (
        <div style={WRAPPER_STYLE}>
            <BackendProvider backend={backend}>
<WorkspaceProvider workspace={workspace}>
            <h1>Column Chart - xaxis name: high, yaxis name: low</h1>
            <ColumnChart
                measures={[Ldm.m_Amount]}
                viewBy={[Ldm.a_Product]}
                stackBy={Ldm.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        rotation: "-30"
                    },
                    yaxis: {
                        name: {
                            visible: true,
                            position: "low",
                        },
                    },
                    legend: {
                        enabled: true,
                        position: 'bottom',
                    },
                    dataLabels: {
                        visible: 'true'
                    },
                    grid: {
                        enabled: true
                    },
                    separators: {
                        thousand: ' ',
                        decimal: ':'
                    }
                }}
            />
            <h1>Bar Chart - xaxis name: middle, yaxis name: high</h1>
            <BarChart
                measures={[Ldm.m_Amount]}
                viewBy={[Ldm.a_Product]}
                stackBy={Ldm.a_StageName}
                config={{
                    secondary_xaxis: {

                        measures: ['Amount'],
                        name: {
                            visible: true,
                            position: "middle",
                        },
                        rotation: "-30"
                    },
                    yaxis: {

                        rotation: '90',
                        name: {
                            visible: true,
                            position: "high",
                        },
                        rotation: "-60"
                    },
                    legend: {
                        enabled: true,
                        position: 'left',
                    },
                    dataLabels: {
                        visible: 'true'
                    },
                    grid: {
                        enabled: true
                    },
                    separators: {
                        thousand: ', ',
                        decimal: '. '
                    },
                    stackMeasures: true
                }}

            />
            <h1>Line Chart - xaxis name: high, yaxis name: high</h1>
            <LineChart
                measures={[Ldm.m_ClosedBOP]}
                trendBy={Ldm.a_Product}
                segmentBy={Ldm.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: 'auto'
                    },
                    legend: {
                        enabled: false,
                        position: 'bottom',
                    },
                    dataLabels: {
                        visible: 'true'
                    },
                    grid: {
                        enabled: false
                    },
                    separators: {
                        thousand: ' ',
                        decimal: ':'
                    },
                    stackMeasures: true,
                    stackMeasuresToPercent: true

                }}
            />
            <h1>Area chart - xaxis name: low, yaxis name: low</h1>
            <AreaChart
                measures={[Ldm.m_ClosedBOP]}
                viewBy={[Ldm.a_Product]}
                stackBy={Ldm.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: true,
                            position: "low",
                        },
                        rotation: 'auto'
                    },
                    yaxis: {
                        name: {
                            visible: true,
                            position: "low",
                        },
                        rotation: 'auto',
                        min: '-100000',
                        max: '300000'
                    }

                }}
            />
            <h1>Combo chart - xaxis name: middle, yaxis name: low, secondary_yaxis name: low</h1>
            <ComboChart
                primaryMeasures={[Ldm.m_ClosedBOP]}
                secondaryMeasures={[Ldm.m_AmountDuplicate]}
                viewBy={[Ldm.a_Product]}
                config={{
                    xaxis: {
                        name: {
                            visible: true,
                            position: "middle",
                        },
                        rotation: '45'
                    },
                    yaxis: {
                        name: {
                            visible: true,
                            position: "low",
                        },
                        rotation: '45'
                    },
                    secondary_yaxis: {
                        name: {
                            visible: true,
                            position: "low",
                        },
                        rotation: '45'
                    },
                    secondaryChartType: 'area'
                }}

            />
            <h1>Scatter Plot - xaxis name: low, yaxis name: low</h1>
            <ScatterPlot
                xAxisMeasure={Ldm.m_Amount}
                yAxisMeasure={Ldm.m_AmountBOP}
                attribute={Ldm.a_Product}
                config={{
                    dataLabels: {
                        visible: true
                    },
                    xaxis: {
                        name: {
                            visible: true,
                            position: "low",
                        },
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: true,
                            position: "low",
                        },
                        rotation: '30'
                    }
                }}
            />
            <h1>Bubble chart - xaxis name: low, yaxis name: low</h1>
            <BubbleChart
                xAxisMeasure={Ldm.m_Amount}
                yAxisMeasure={Ldm.m_AmountBOP}
                size={Ldm.m_AvgWon}
                viewBy={Ldm.a_Product}
                config={{
                    xaxis: {
                        name: {
                            visible: true,
                            position: "low",
                        },
                        labelsEnabled: true,
                        rotation: 'auto'
                    },
                    yaxis: {
                        name: {
                            visible: true,
                            position: "low",
                        },
                        labelsEnabled: true,
                        rotation: 'auto'
                    },
                    dataLabels: {
                        visible: 'true'
                    }
                }}
            />

            <h1>Heatmap chart - xaxis name: low, yaxis name: low</h1>
            <Heatmap
                measure={Ldm.m_ClosedBOP}
                rows={Ldm.a_Product}
                columns={Ldm.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: true,
                            position: "low",
                        },
                        rotation: 'auto'
                    },
                    yaxis: {
                        name: {
                            visible: true,
                            position: "low",
                        },
                        rotation: 'auto'
                    }
                }}
            />
            </WorkspaceProvider>  
</BackendProvider>
        </div>
    ))
    .add('Dual Axis - 1 measure on each axis', () => (
        <div style={WRAPPER_STYLE}>
            <BackendProvider backend={backend}>
<WorkspaceProvider workspace={workspace}>
            <h1>Column Chart - xaxis name: high, yaxis name: high, secondary_yaxis: high</h1>
            <ColumnChart
                measures={[Ldm.m_Amount, Ldm.m_AmountBOP]}
                viewBy={[Ldm.a_Product]}
                stackBy={Ldm.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    },
                    secondary_yaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30',
                        measures: ['AmountBOP']
                    }
                }}

            />
            <h1>Bar Chart - xaxis name: low, yaxis name: low, secondary_yaxis: low</h1>
            <BarChart
                measures={[Ldm.m_Amount, Ldm.m_AmountBOP]}
                viewBy={[Ldm.a_Product]}
                stackBy={Ldm.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: true,
                            position: "low",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '45'
                    },
                    yaxis: {
                        name: {
                            visible: true,
                            position: "low",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '45'
                    },
                    secondary_xaxis: {
                        name: {
                            visible: true,
                            position: "low",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '45',
                        measures: ['AmountBOP']
                    }
                }}
            />
            <h1>Line Chart - xaxis name: middle, yaxis name: middle, secondary_yaxis: middle</h1>
            <LineChart
                measures={[Ldm.m_Amount, Ldm.m_AmountBOP]}
                trendBy={Ldm.a_Product}
                segmentBy={Ldm.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: true,
                            position: "middle",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '60'
                    },
                    yaxis: {
                        name: {
                            visible: true,
                            position: "middle",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '60'
                    },
                    secondary_yaxis: {
                        name: {
                            visible: true,
                            position: "middle",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '60',
                        measures: ['AmountBOP']
                    }
                }}
            />
            <h1>Area Chart - xaxis name: high, yaxis name: middle, secondary_yaxis: low</h1>
            <AreaChart
                measures={[Ldm.m_Amount, Ldm.m_AmountBOP]}
                viewBy={[Ldm.a_Product]}
                stackBy={Ldm.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '75'
                    },
                    yaxis: {
                        name: {
                            visible: true,
                            position: "middle",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '75'
                    },
                    secondary_yaxis: {
                        name: {
                            visible: true,
                            position: "low",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '75',
                        measures: ['AmountBOP']
                    }
                }}
            />
            </WorkspaceProvider>  
</BackendProvider>
        </div>
    ))
    .add('>= 2 measures', () => (
        <div style={WRAPPER_STYLE}>
            <h1>>= 2 measures</h1>
            <BackendProvider backend={backend}>
<WorkspaceProvider workspace={workspace}>
            <h1>Column Chart - xaxis name: high, yaxis name: not show</h1>
            <ColumnChart
                measures={[Ldm.m_Amount, Ldm.m_AmountBOP]}
                viewBy={[Ldm.a_Product]}
                stackBy={Ldm.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    }
                }}

            />
            <h1>Bar Chart - xaxis name: not show, yaxis name: high</h1>
            <BarChart
                measures={[Ldm.m_Amount, Ldm.m_AmountBOP]}
                viewBy={[Ldm.a_Product]}
                stackBy={Ldm.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    }
                }}
            />
            <h1>Line Chart - xaxis name: high, yaxis name: not show</h1>
            <LineChart
                measures={[Ldm.m_Amount, Ldm.m_AmountBOP, Ldm.m_AmountNegative]}
                trendBy={Ldm.a_Product}
                segmentBy={Ldm.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    }
                }}
            />
            <h1>Area chart - xaxis name: high, yaxis name: not show</h1>
            <AreaChart
                measures={[Ldm.m_Amount, Ldm.m_AmountBOP]}
                viewBy={[Ldm.a_Product]}
                stackBy={Ldm.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    }
                }}
            />
            <h1>Combo chart - xaxis name: high, yaxis name: not show, secondary_yaxis name: high</h1>
            <ComboChart
                primaryMeasures={[Ldm.m_Amount, Ldm.m_AmountNegative]}
                secondaryMeasures={[Ldm.m_AvgWon, Ldm.m_AvgAmount]}
                viewBy={[Ldm.a_Product]}
                config={{
                    xaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    },

                    secondary_yaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
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
    .add('turn off name, position is disabled', () => (
        <div style={WRAPPER_STYLE}>
            <BackendProvider backend={backend}>
<WorkspaceProvider workspace={workspace}>
            <h1>Column Chart - xaxis name: not show, yaxis name: not show</h1>
            <ColumnChart
                measures={[Ldm.m_Amount, Ldm.m_AmountBOP]}
                viewBy={[Ldm.a_Product]}
                stackBy={Ldm.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: false,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: false,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    }
                }}
            />
            <h1>Bar Chart - xaxis name: not show, yaxis name: not show</h1>
            <BarChart
                measures={[Ldm.m_Amount, Ldm.m_AmountBOP]}
                viewBy={[Ldm.a_Product]}
                stackBy={Ldm.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: false,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: false,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    }
                }}
            />
            <h1>Line Chart - xaxis name: not show, yaxis name: not show</h1>
            <LineChart
                measures={[Ldm.m_Amount, Ldm.m_AmountBOP]}
                trendBy={Ldm.a_Product}
                segmentBy={Ldm.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: false,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: false,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    }
                }}
            />
            <h1>Area chart - xaxis name: not show, yaxis name: not show</h1>
            <AreaChart
                measures={[Ldm.m_Amount, Ldm.m_AmountBOP]}
                viewBy={[Ldm.a_Product]}
                stackBy={Ldm.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: false,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: false,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    }
                }}
            />
            <h1>Combo chart - xaxis name: not show, yaxis name: not show, secondary_yaxis name: not show</h1>
            <ComboChart
                primaryMeasures={[Ldm.m_Amount]}
                secondaryMeasures={[Ldm.m_AvgWon]}
                viewBy={[Ldm.a_Product]}
                config={{
                    xaxis: {
                        name: {
                            visible: false,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: false,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    },
                    secondary_yaxis: {
                        name: {
                            visible: false,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    }
                }}
            />
            <h1>Scatter Plot - xaxis name: not show, yaxis name: not show</h1>
            <ScatterPlot
                xAxisMeasure={Ldm.m_Amount}
                yAxisMeasure={Ldm.m_AmountBOP}
                attribute={Ldm.a_Product}
                config={{
                    xaxis: {
                        name: {
                            visible: false,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: false,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    }
                }}
            />
            <h1>Bubble chart - xaxis name: not show, yaxis name: not show</h1>
            <BubbleChart
                xAxisMeasure={Ldm.m_Amount}
                yAxisMeasure={Ldm.m_AmountBOP}
                size={Ldm.m_AvgWon}
                viewBy={Ldm.a_Product}
                config={{
                    xaxis: {
                        name: {
                            visible: false,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: false,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    }
                }}
            />

            <h1>Heatmap chart - xaxis name: not show, yaxis name: not show</h1>
            <Heatmap
                measure={Ldm.m_ClosedBOP}
                rows={Ldm.a_Product}
                columns={Ldm.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: false,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: false,
                            position: "high",
                        },
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
    .add('turn on/off Labels/Scale, Name isnt affected', () => (
        <div style={WRAPPER_STYLE}>
            <BackendProvider backend={backend}>
<WorkspaceProvider workspace={workspace}>
            <h1>Column Chart - xaxis name: high, yaxis name: high, turn off label</h1>
            <ColumnChart
                measures={[Ldm.m_Amount]}
                viewBy={[Ldm.a_Product]}
                stackBy={Ldm.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: false,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: false,
                        rotation: '30'
                    }
                }}
            />
            <h1>Bar Chart - xaxis name: high, yaxis name: high, turn off label</h1>
            <BarChart
                measures={[Ldm.m_Amount]}
                viewBy={[Ldm.a_Product]}
                stackBy={Ldm.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: false,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: false,
                        rotation: '30'
                    }
                }}
            />
            <h1>Line Chart - xaxis name: high, yaxis name: high, turn off label</h1>
            <LineChart
                measures={[Ldm.m_AmountBOP]}
                trendBy={Ldm.a_Product}
                segmentBy={Ldm.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: false,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: false,
                        rotation: '30'
                    }
                }}
            />
            <h1>Area chart - xaxis name: high, yaxis name: high, turn off label</h1>
            <AreaChart
                measures={[Ldm.m_Amount]}
                viewBy={[Ldm.a_Product]}
                stackBy={Ldm.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: false,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: false,
                        rotation: '30'
                    }
                }}
            />
            <h1>Combo chart - xaxis,yaxis,secondary_yaxis name: high, turn off label</h1>
            <ComboChart
                primaryMeasures={[Ldm.m_Amount]}
                secondaryMeasures={[Ldm.m_AvgWon]}
                viewBy={[Ldm.a_Product]}
                config={{
                    xaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: false,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: false,
                        rotation: '30'
                    },
                    secondary_yaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: false,
                        rotation: '30'
                    }
                }}
            />
            <h1>ScatterPlot chart - xaxis name: high, yaxis name: high, turn off label</h1>
            <ScatterPlot
                xAxisMeasure={Ldm.m_Amount}
                yAxisMeasure={Ldm.m_AmountBOP}
                attribute={Ldm.a_Product}
                config={{
                    xaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: false,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: false,
                        rotation: '30'
                    }
                }}
            />
            <h1>Bubble chart - xaxis name: high, yaxis name: high, turn off label</h1>
            <BubbleChart
                xAxisMeasure={Ldm.m_Amount}
                yAxisMeasure={Ldm.m_AmountBOP}
                size={Ldm.m_AvgWon}
                viewBy={Ldm.a_Product}
                config={{
                    xaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: false,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: false,
                        rotation: '30'
                    }
                }}
            />

            <h1>Heatmap chart - xaxis name: high, yaxis name: high, turn off label</h1>
            <Heatmap
                measure={Ldm.m_ClosedBOP}
                rows={Ldm.a_Product}
                columns={Ldm.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: false,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: false,
                        rotation: '30'
                    }
                }}
            />
</WorkspaceProvider>  
</BackendProvider>

        </div>
    ))
    .add('turn on name, turn off xaxis, yaxis', () => (
        <div style={WRAPPER_STYLE}>
            <h1>Column Chart - xaxis, yaxis: not show</h1>
            <BackendProvider backend={backend}>
<WorkspaceProvider workspace={workspace}>
            <ColumnChart
                measures={[Ldm.m_Amount, Ldm.m_AmountBOP]}
                viewBy={[Ldm.a_Product]}
                stackBy={Ldm.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: true,
                            position: "low",
                        },
                        visible: false,
                        labelsEnabled: true,
                        rotation: '45'
                    },
                    yaxis: {
                        name: {
                            visible: true,
                            position: "low",
                        },
                        visible: false,
                        labelsEnabled: true,
                        rotation: '60'
                    }
                }}
            />
            <h1>Bar Chart - xaxis, yaxis: not show</h1>
            <BarChart
                measures={[Ldm.m_Amount, Ldm.m_AmountBOP]}
                viewBy={[Ldm.a_Product]}
                stackBy={Ldm.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: true,
                            position: "low",
                        },
                        visible: false,
                        labelsEnabled: true,
                        rotation: '90'

                    },
                    yaxis: {
                        name: {
                            visible: true,
                            position: "low",
                        },
                        visible: false,
                        labelsEnabled: true,
                        rotation: 'auto'
                    }
                }}
            />
            <h1>Line Chart - xaxis, yaxis: not show</h1>
            <LineChart
                measures={[Ldm.m_Amount, Ldm.m_AmountBOP]}
                trendBy={Ldm.a_Product}
                segmentBy={Ldm.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: true,
                            position: "low",
                        },
                        visible: false,
                        labelsEnabled: true,
                        rotation: '90'
                    },
                    yaxis: {
                        name: {
                            visible: true,
                            position: "low",
                        },
                        visible: false,
                        labelsEnabled: true,
                        rotation: '90'
                    }
                }}
            />
            <h1>Area chart - xaxis, yaxis: not show</h1>
            <AreaChart
                measures={[Ldm.m_Amount, Ldm.m_AmountBOP]}
                viewBy={[Ldm.a_Product]}
                stackBy={Ldm.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: true,
                            position: "low",
                        },
                        visible: false,
                        labelsEnabled: true,
                        rotation: '90'
                    },
                    yaxis: {
                        name: {
                            visible: true,
                            position: "low",
                        },
                        visible: false,
                        labelsEnabled: true,
                        rotation: '90'
                    }
                }}
            />
            <h1>Combo chart - xaxis, yaxis: not show</h1>
            <ComboChart
                primaryMeasures={[Ldm.m_Amount, Ldm.m_AmountBOP]}
                secondaryMeasures={[Ldm.m_AvgWon, Ldm.m_AmountDuplicate]}
                viewBy={[Ldm.a_Product]}
                config={{
                    xaxis: {
                        name: {
                            visible: true,
                            position: "low",
                        },
                        visible: false,
                        labelsEnabled: true,
                        rotation: '90'
                    },
                    yaxis: {
                        name: {
                            visible: true,
                            position: "low",
                        },
                        visible: false,
                        labelsEnabled: true,
                        rotation: '90'
                    },
                    secondary_yaxis: {
                        name: {
                            visible: true,
                            position: "low",
                        },
                        visible: false,
                        labelsEnabled: true,
                        rotation: '90'
                    }
                }}
            />
            <h1>Scatter Plot  - xaxis, yaxis: not show</h1>
            <ScatterPlot
                xAxisMeasure={Ldm.m_Amount}
                yAxisMeasure={Ldm.m_AmountBOP}
                attribute={Ldm.a_Product}
                config={{
                    xaxis: {
                        name: {
                            visible: true,
                            position: "low",
                        },
                        visible: false,
                        labelsEnabled: true,
                        rotation: '90'
                    },
                    yaxis: {
                        name: {
                            visible: true,
                            position: "low",
                        },
                        visible: false,
                        labelsEnabled: true,
                        rotation: '90'
                    }
                }}
            />
            <h1>BubbleChart - xaxis, yaxis: not show</h1>
            <BubbleChart
                xAxisMeasure={Ldm.m_Amount}
                yAxisMeasure={Ldm.m_AmountBOP}
                size={Ldm.m_AvgWon}
                viewBy={Ldm.a_Product}
                config={{
                    xaxis: {
                        name: {
                            visible: true,
                            position: "low",
                        },
                        visible: false,
                        labelsEnabled: true,
                        rotation: '45'
                    },
                    yaxis: {
                        name: {
                            visible: true,
                            position: "low",
                        },
                        visible: false,
                        labelsEnabled: true,
                        rotation: '45'
                    }
                }}
            />

            <h1>Heatmap - xaxis, yaxis: not show</h1>
            <Heatmap
                measure={Ldm.m_ClosedBOP}
                rows={Ldm.a_Product}
                columns={Ldm.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: true,
                            position: "low",
                        },
                        visible: false,
                        labelsEnabled: true,
                        rotation: '45'
                    },
                    yaxis: {
                        name: {
                            visible: true,
                            position: "low",
                        },
                        visible: false,
                        labelsEnabled: true,
                        rotation: '45'
                    }
                }}
            />
</WorkspaceProvider>  
</BackendProvider>

        </div>
    ))
    .add('turn off name, position is disabled', () => (
        <div style={WRAPPER_STYLE}>
            <h1>Column Chart - xaxis name: not show, yaxis name: not show</h1>
            <BackendProvider backend={backend}>
<WorkspaceProvider workspace={workspace}>
            <ColumnChart
                measures={[Ldm.m_Amount, Ldm.m_AmountBOP]}
                viewBy={[Ldm.a_Product]}
                stackBy={Ldm.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: false,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: false,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    }
                }}
            />
            <h1>Bar Chart - xaxis name: not show, yaxis name: not show</h1>
            <BarChart
                measures={[Ldm.m_Amount, Ldm.m_AmountBOP]}
                viewBy={[Ldm.a_Product]}
                stackBy={Ldm.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: false,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: false,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    }
                }}
            />
            <h1>Line Chart - xaxis name: not show, yaxis name: not show</h1>
            <LineChart
                measures={[Ldm.m_Amount, Ldm.m_AmountBOP]}
                trendBy={Ldm.a_Product}
                segmentBy={Ldm.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: false,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: false,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    }
                }}
            />
            <h1>Area chart - xaxis name: not show, yaxis name: not show</h1>
            <AreaChart
                measures={[Ldm.m_Amount, Ldm.m_AmountBOP]}
                viewBy={[Ldm.a_Product]}
                stackBy={Ldm.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: false,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: false,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    }
                }}
            />
            <h1>Combo chart - xaxis name: not show, yaxis name: not show, secondary_yaxis name: not show</h1>
            <ComboChart
                primaryMeasures={[Ldm.m_Amount]}
                secondaryMeasures={[Ldm.m_AvgWon]}
                viewBy={[Ldm.a_Product]}
                config={{
                    xaxis: {
                        name: {
                            visible: false,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: false,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    },
                    secondary_yaxis: {
                        name: {
                            visible: false,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    }
                }}
            />
            <h1>Scatter Plot - xaxis name: not show, yaxis name: not show</h1>
            <ScatterPlot
                xAxisMeasure={Ldm.m_Amount}
                yAxisMeasure={Ldm.m_AmountBOP}
                attribute={Ldm.a_Product}
                config={{
                    xaxis: {
                        name: {
                            visible: false,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: false,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    }
                }}
            />
            <h1>Bubble chart - xaxis name: not show, yaxis name: not show</h1>
            <BubbleChart
                xAxisMeasure={Ldm.m_Amount}
                yAxisMeasure={Ldm.m_AmountBOP}
                size={Ldm.m_AvgWon}
                viewBy={Ldm.a_Product}
                config={{
                    xaxis: {
                        name: {
                            visible: false,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: false,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    }
                }}
            />

            <h1>Heatmap chart - xaxis name: not show, yaxis name: not show</h1>
            <Heatmap
                measure={Ldm.m_ClosedBOP}
                rows={Ldm.a_Product}
                columns={Ldm.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: false,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: false,
                            position: "high",
                        },
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
    .add('turn on/off Labels/Scale, Name isnt affected', () => (
        <div style={WRAPPER_STYLE}>
            <h1>Column Chart - xaxis name: high, yaxis name: high, turn off label</h1>
            <BackendProvider backend={backend}>
<WorkspaceProvider workspace={workspace}>
            <ColumnChart
                measures={[Ldm.m_Amount]}
                viewBy={[Ldm.a_Product]}
                stackBy={Ldm.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: false,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: false,
                        rotation: '30'
                    }
                }}
            />
            <h1>Bar Chart - xaxis name: high, yaxis name: high, turn off label</h1>
            <BarChart
                measures={[Ldm.m_Amount]}
                viewBy={[Ldm.a_Product]}
                stackBy={Ldm.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: false,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: false,
                        rotation: '30'
                    }
                }}
            />
            <h1>Line Chart - xaxis name: high, yaxis name: high, turn off label</h1>
            <LineChart
                measures={[Ldm.m_AmountBOP]}
                trendBy={Ldm.a_Product}
                segmentBy={Ldm.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: false,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: false,
                        rotation: '30'
                    }
                }}
            />
            <h1>Area chart - xaxis name: high, yaxis name: high, turn off label</h1>
            <AreaChart
                measures={[Ldm.m_Amount]}
                viewBy={[Ldm.a_Product]}
                stackBy={Ldm.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: false,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: false,
                        rotation: '30'
                    }
                }}
            />
            <h1>Combo chart - xaxis,yaxis,secondary_yaxis name: high, turn off label</h1>
            <ComboChart
                primaryMeasures={[Ldm.m_Amount]}
                secondaryMeasures={[Ldm.m_AvgWon]}
                viewBy={[Ldm.a_Product]}
                config={{
                    xaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: false,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: false,
                        rotation: '30'
                    },
                    secondary_yaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: false,
                        rotation: '30'
                    }
                }}
            />
            <h1>ScatterPlot chart - xaxis name: high, yaxis name: high, turn off label</h1>
            <ScatterPlot
                xAxisMeasure={Ldm.m_Amount}
                yAxisMeasure={Ldm.m_AmountBOP}
                attribute={Ldm.a_Product}
                config={{
                    xaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: false,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: false,
                        rotation: '30'
                    }
                }}
            />
            <h1>Bubble chart - xaxis name: high, yaxis name: high, turn off label</h1>
            <BubbleChart
                xAxisMeasure={Ldm.m_Amount}
                yAxisMeasure={Ldm.m_AmountBOP}
                size={Ldm.m_AvgWon}
                viewBy={Ldm.a_Product}
                config={{
                    xaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: false,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: false,
                        rotation: '30'
                    }
                }}
            />

            <h1>Heatmap chart - xaxis name: high, yaxis name: high, turn off label</h1>
            <Heatmap
                measure={Ldm.m_ClosedBOP}
                rows={Ldm.a_Product}
                columns={Ldm.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: false,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: false,
                        rotation: '30'
                    }
                }}
            />

</WorkspaceProvider>  
</BackendProvider>
        </div>
    ))
    .add('InsightView', () => (
        <div style={WRAPPER_STYLE}>
            <BackendProvider backend={backend}>
<WorkspaceProvider workspace={workspace}>
            <h1>not config: xaxis, yaxis: default</h1>
            <InsightView
                insight={Ldm.Insights.AxisNameandPosition1}
            />
            <h1>config on sdk: xaxis, yaxis: high</h1>
            <InsightView
                insight={Ldm.Insights.AxisNameandPosition1}
                config={{
                    xaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    }
                }}
            />
            <h1>config on AD then change config on sdk: xaxis, yaxis: high</h1>
            <InsightView
                insight={Ldm.Insights.AxisNameandPosition2}
                config={{
                    xaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
                        visible: true,
                        labelsEnabled: true,
                        rotation: '30'
                    },
                    yaxis: {
                        name: {
                            visible: true,
                            position: "high",
                        },
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
    .add('invalid values of position parameter', () => (
        <div style={WRAPPER_STYLE}>
            <h1>Column Chart - xaxis name: high, yaxis name: low</h1>
            <BackendProvider backend={backend}>
<WorkspaceProvider workspace={workspace}>
            <ColumnChart
                measures={[Ldm.m_Amount, Ldm.m_AmountBOP]}
                viewBy={[Ldm.a_Product]}
                stackBy={Ldm.a_StageName}
                config={{
                    xaxis: {
                        name: {
                            visible: true,
                            position: "HIGH",
                        },
                        rotation: "30"
                    },
                    yaxis: {
                        name: {
                            visible: true,
                            position: "MIDDLE",
                        },
                        rotation: "30"
                    },
                    secondary_yaxis: {
                        name: {
                            visible: true,
                            position: "HIGH",
                        },
                        measures: ['AmountBOP'],
                        rotation: "30"
                    }
                }}
            />
            </WorkspaceProvider>  
</BackendProvider>
        </div>
    ))
    ;
