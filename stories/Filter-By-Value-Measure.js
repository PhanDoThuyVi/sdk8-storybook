//author: pdtvi
import React from 'react';
import { storiesOf } from '@storybook/react';
import '@gooddata/sdk-ui-charts/styles/css/main.css'; 
import '@gooddata/sdk-ui-pivot/styles/css/main.css';
import { Headline, PivotTable, ColumnChart, BarChart, LineChart, AreaChart, HeaderPredicateFactory, PieChart, DonutChart, Treemap, Heatmap, ComboChart, ScatterPlot, BubbleChart } from '@gooddata/sdk-ui-charts';
import { InsightView } from '@gooddata/sdk-ui-ext';
import { BackendProvider } from "@gooddata/sdk-ui";
import { WorkspaceProvider } from "@gooddata/sdk-ui";
import bearFactory, { ContextDeferredAuthProvider } from "@gooddata/sdk-backend-bear";
import { projectId as workspace } from "../src/constants";
import {Ldm, LdmExt} from "../src/ldm"

const backend = bearFactory().withAuthentication(new ContextDeferredAuthProvider());
const DOWNLOADER_ID = 'downloader';
let exportResult: any;

function onExportReady(execution: any) {
   exportResult = execution;
}

async function doExport() {
   const result = await exportResult({
      format: 'xlsx',
      includeFilterContext: true,
      mergeHeaders: true
   });
   //downloadFile(result.uri);
   window.open(result.uri);
}

const WRAPPER_STYLE = { width: 1200, height: 400 };
storiesOf('Filter by value measure', module)
   .add('Pivot Table', () => (
      <div style={WRAPPER_STYLE}>
         <h1>Amount>5000000</h1>
         <PivotTable
            measures={[Ldm.m_Amount]}
            rows={[Ldm.a_StageName]}
            columns={[Ldm.a_Product]}
            filters={[LdmExt.filterAmount_GreaterThan]}
         />
         <h1>Ratio, Amount greater than 5000000</h1>
         <PivotTable
            measures={[LdmExt.m_AmountRatio]}
            rows={[Ldm.a_StageName]}
            columns={[Ldm.a_Product]}
            filters={[LdmExt.filterAmountRatio_GreaterThan]}
         />
         <h1>(ATT) AM - Filter positive attribute + absolute date, Change_ClosedBOP_SnapshotBOP = -100%
         </h1>
         <PivotTable
            measures={[Ldm.m_ClosedBOP, Ldm.m_SnapshotBOP, LdmExt.m_Change_ClosedBOP_SnapshotBOP]}
            rows={[Ldm.a_StageName, Ldm.a_Product]}
            columns={[Ldm.a_YearSnapshot]}
            filters={[LdmExt.filterChange_EqualTo, LdmExt.filterStageNameInterest, LdmExt.absoluteYearSnapshot]}
         />
         <h1>(ATT) PP, SLPY - Combine all filters, m_POP_SumDayToClose between 20000 and 100000</h1>
         <PivotTable
            measures={[Ldm.m_SumDayToClose, LdmExt.m_POP_SumDayToClose]}
            rows={[Ldm.a_YearClosed]}
            columns={[Ldm.a_StageName]}
            filters={[LdmExt.filterPOPSumDayToClose_Between, LdmExt.filterStageNameNegative, LdmExt.relativeYearSnapshot]}
         />
         <h1>Pivot has sub-total and sort attribute Product
            Amount less than 1000000, drill Amount, export to xlsx</h1>
         {/* <button onClick={() => doExport()}>Export</button> */}
         <PivotTable
            measures={[Ldm.m_Amount]}
            rows={[Ldm.a_Product, Ldm.a_StageName]}
            columns={[Ldm.a_Product]}
            totals={[LdmExt.t_totalsPivotTable]}
            sortBy={[LdmExt.s_sortonProductDesc]}
            filters={[LdmExt.filterAmount_LessThan]}
            // drillableItems={[
            //    HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/1279`)
            // ]}
            // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            // onExportReady={onExportReady}
         />
      </div>
   ))
   .add('Column Chart', () => (
      <div style={WRAPPER_STYLE}>
         <h1>Amount>5000000, drill Amount, export to xlsx</h1>
         {/* <button onClick={doExport}>Export</button> */}
         <ColumnChart
            measures={[Ldm.m_Amount]}
            viewBy={[Ldm.a_StageName]}
            stackBy={Ldm.a_Product}
            filters={[LdmExt.filterAmount_GreaterThan]}
            // drillableItems={[
            //    HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/1279`)
            // ]}
            // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            // onExportReady={onExportReady}
         />
         <h1>AM - Change_ClosedBOP_SnapshotBOP = -100%, stack to %</h1>
         <ColumnChart
            measures={[Ldm.m_ClosedBOP, Ldm.m_SnapshotBOP, LdmExt.m_Change_ClosedBOP_SnapshotBOP]}
            viewBy={[Ldm.a_StageName]}
            filters={[LdmExt.filterChange_EqualTo]}
            config={{
               stackMeasures: true,
               stackMeasuresToPercent: true
            }}
         />
      </div>
   ))
   .add('Bar Chart', () => (
      <div style={WRAPPER_STYLE}>
         <h1>Amount greater than 5000000, drill Amount, export to xlsx</h1>
         <button onClick={doExport}>Export</button>
         <BarChart
            measures={[Ldm.m_Amount]}
            viewBy={[Ldm.a_StageName]}
            stackBy={Ldm.a_Product}
            filters={[LdmExt.filterAmount_GreaterThan]}
            drillableItems={[
               HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/1279`)
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            onExportReady={onExportReady}
         />
         <h1>AM - Change_ClosedBOP_SnapshotBOP = -100%, stack to %</h1>
         <BarChart
            measures={[Ldm.m_ClosedBOP, Ldm.m_SnapshotBOP, Ldm.m_Change_ClosedBOP_SnapshotBOP]}
            viewBy={[Ldm.a_StageName]}
            filters={[LdmExt.filterChange_EqualTo]}
            config={{
               stackMeasures: true,
               stackMeasuresToPercent: true
            }}
         />
      </div>
   ))
   .add('Line Chart', () => (
      <div style={WRAPPER_STYLE}>
         <h1>Amount>5000000, drill Amount, export to xlsx</h1>
         <button onClick={doExport}>Export</button>
         <LineChart
            measures={[Ldm.m_Amount]}
            trendBy={Ldm.a_StageName}
            segmentBy={Ldm.a_Product}
            filters={[LdmExt.filterAmount_GreaterThan]}
            config={{
               dataLabels: {
                  visible: 'true'
               },
            }}
            drillableItems={[
               HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/1279`)
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            onExportReady={onExportReady}
         />
         <h1>AM - Change_ClosedBOP_SnapshotBOP = -100%, stack to %</h1>
         <LineChart
            measures={[Ldm.m_ClosedBOP, Ldm.m_SnapshotBOP, Ldm.m_Change_ClosedBOP_SnapshotBOP]}
            trendBy={Ldm.a_StageName}
            filters={[LdmExt.filterChange_EqualTo]}
            config={{
               dataLabels: {
                  visible: 'true'
               },
               stackMeasures: true,
               stackMeasuresToPercent: true
            }}
         />
      </div>
   ))
   .add('Area Chart', () => (
      <div style={WRAPPER_STYLE}>
         <h1>Amount>5000000, drill Amount, export to xlsx</h1>
         <button onClick={doExport}>Export</button>
         <AreaChart
            measures={[Ldm.m_Amount]}
            viewBy={[Ldm.a_StageName]}
            stackBy={Ldm.a_Product}
            filters={[LdmExt.filterAmount_GreaterThan]}
            config={{
               dataLabels: {
                  visible: 'true'
               },
            }}
            drillableItems={[
               HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/1279`)
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            onExportReady={onExportReady}
         />
         <h1>AM - Change_ClosedBOP_SnapshotBOP = -100%, stack to %</h1>
         <AreaChart
            measures={[Ldm.m_ClosedBOP, Ldm.m_SnapshotBOP, Ldm.m_Change_ClosedBOP_SnapshotBOP]}
            viewBy={[Ldm.a_StageName]}
            filters={[LdmExt.filterChange_EqualTo]}
            config={{
               dataLabels: {
                  visible: 'true'
               },
               stackMeasures: true,
               stackMeasuresToPercent: true
            }}
         />
      </div>
   ))
   .add('Combo Chart', () => (
      <div style={WRAPPER_STYLE}>
         <h1>Amount>5000000, drill Amount, export to xlsx</h1>
         <button onClick={doExport}>Export</button>
         <ComboChart
            primaryMeasures={[Ldm.m_Amount]}
            secondaryMeasures={[Ldm.m_AmountBOP]}
            viewBy={[Ldm.a_StageName]}
            filters={[LdmExt.filterAmount_GreaterThan]}
            drillableItems={[
               HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/1279`)
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            onExportReady={onExportReady}
         />
         <h1>AM - Change_ClosedBOP_SnapshotBOP = -100%, stack to %</h1>
         <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP, Ldm.m_SnapshotBOP]}
            secondaryMeasures={[Ldm.m_Change_ClosedBOP_SnapshotBOP]}
            viewBy={[Ldm.a_StageName]}
            filters={[LdmExt.filterChange_EqualTo]}
            config={{
               stackMeasures: true,
               stackMeasuresToPercent: true
            }}
         />
      </div>
   ))
   .add('Scatter Plot/Bubble Chart', () => (
      <div style={WRAPPER_STYLE}>
         <h1>Amount>5000000, drill Amount, export to xlsx</h1>
         <button onClick={doExport}>Export</button>
         <ScatterPlot
            xAxisMeasure={Ldm.m_Amount}
            yAxisMeasure={Ldm.m_AvgAmount}
            attribute={Ldm.a_StageName}
            config={{
               dataLabels: {
                  visible: true
               }
            }}
            filters={[LdmExt.filterAmount_GreaterThan]}
            drillableItems={[
               HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/1279`)
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            onExportReady={onExportReady}
         />
         <h1>Ratio, Amount>5000000, stack to %</h1>
         <BubbleChart
            xAxisMeasure={Ldm.m_AmountRatio}
            yAxisMeasure={Ldm.m_Amount}
            viewBy={Ldm.a_StageName}
            filters={[LdmExt.filterAmountRatio_GreaterThan]}
            config={{
               dataLabels: {
                  visible: true
               },
               stackMeasures: true,
               stackMeasuresToPercent: true
            }}
         />
      </div>
   ))
   .add('Pie/Donut Chart', () => (
      <div style={WRAPPER_STYLE}>
         <h1>Amount>5000000, drill Amount, export to xlsx</h1>
         <button onClick={doExport}>Export</button>
         <PieChart
            measures={[Ldm.m_Amount]}
            viewBy={Ldm.a_StageName}
            filters={[LdmExt.filterAmount_GreaterThan]}
            config={{
               dataLabels: {
                  visible: true
               }
            }}
            drillableItems={[
               HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/1279`)
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            onExportReady={onExportReady}
         />
         <h1>Ratio, Amount>5000000, drill Amount, stack to %</h1>
         <DonutChart
            measures={[Ldm.m_AmountRatio]}
            viewBy={Ldm.a_StageName}
            filters={[LdmExt.filterAmountRatio_GreaterThan]}
            config={{
               dataLabels: {
                  visible: true
               },
               stackMeasures: true,
               stackMeasuresToPercent: true
            }}
            drillableItems={[
               HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/1279`)
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
         />
      </div>
   ))
   .add('Treemap/Heatmap', () => (
      <div style={WRAPPER_STYLE}>
         <h1>Amount>5000000, drill Amount, export to xlsx</h1>
         <button onClick={doExport}>Export</button>
         <Treemap
            measures={[Ldm.m_Amount]}
            viewBy={Ldm.a_StageName}
            segmentBy={Ldm.a_Product}
            filters={[LdmExt.filterAmount_GreaterThan]}
            drillableItems={[
               HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/1279`)
            ]}
            onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            onExportReady={onExportReady}
         />
         <h1>AM - Filter positive attribute, Change_ClosedBOP_SnapshotBOP = -100%
            stack to %
         </h1>
         <Heatmap
            measure={Ldm.m_AmountRatio}
            rows={Ldm.a_StageName}
            columns={Ldm.a_Product}
            config={{
               dataLabels: {
                  visible: true
               },
               stackMeasures: true,
               stackMeasuresToPercent: true
            }}
            filters={[LdmExt.filterAmountRatio_GreaterThan]}
         />
      </div>
   ))
   .add('Special Insights', () => (
      <div style={WRAPPER_STYLE}>
         <h1>No data</h1>
         <ColumnChart
            measures={[Ldm.m_Amount]}
            viewBy={[Ldm.a_StageName]}
            stackBy={Ldm.a_Product}
            filters={[LdmExt.filterAmount_NotBetween]}
         />
         <h1>Invalid Insight</h1>
         <BarChart
            measures={[Ldm.m_AmountRatio]}
            viewBy={[Ldm.a_StartFrom]}
            filters={[LdmExt.filterAmountRatio_GreaterThan]}
         />
         <h1>Insight has negative measure (Pie/Donut/Treemap)</h1>
         <h2>Pie chart</h2>
         <PieChart
            measures={[Ldm.m_AmountNegative]}
            viewBy={Ldm.a_StageName}
            filters={[LdmExt.filterAmountNegative_NotEqualTo]}
         />
         <h2>Donut chart</h2>
         <DonutChart
            measures={[Ldm.m_AmountNegative]}
            viewBy={Ldm.a_StageName}
            filters={[LdmExt.filterAmountNegative_NotEqualTo]}
         />
         <h2>Treemap</h2>
         <Treemap
            measures={[Ldm.m_AmountNegative]}
            viewBy={Ldm.a_StageName}
            filters={[LdmExt.filterAmountNegative_NotEqualTo]}
         />
         <h1>Insight has too large data, can’t show data</h1>
         <AreaChart
            measures={[Ldm.m_Amount]}
            viewBy={Ldm.a_Activity}
            stackBy={Ldm.a_StageName}
            filters={[LdmExt.filterAmount_GreaterThan]}
         />
         <h1>Insight contains NULL or empty value</h1>
         <PivotTable
            measures={[Ldm.m_AmountNullFormat]}
            rows={[Ldm.a_StageName, Ldm.a_Product]}
            columns={[Ldm.a_YearSnapshot, Ldm.a_YearClosed]}
            filters={[LdmExt.filterAmountNullFormat_GreaterThanOrEqualTo]}
         />
         <h1>Insight has restricted fact</h1>
         <PivotTable
            measures={[Ldm.m_ActivityRestricted]}
            rows={[Ldm.a_Department]}
            filters={[LdmExt.filterActivityRestricted_LessThanOrEqualTo]}
         />
         <h1>Insight has protected attribute</h1>
         <h3>Admin: show insight, Other roles: show “SORRY, WE CAN’T DISPLAY ...” </h3>
         <BarChart
            measures={[Ldm.m_Amount]}
            viewBy={[Ldm.a_StageName]}
            stackBy={Ldm.a_Product}
            filters={[LdmExt.filterAmount_GreaterThan]}
         />
         <h1>Insight has duplicated measures, check that render correctly</h1>
         <BarChart
            measures={[Ldm.m_Amount, Ldm.m_AmountDuplicate]}
            viewBy={[Ldm.a_StageName]}
            stackBy={Ldm.a_Product}
            filters={[LdmExt.filterAmount_GreaterThan]}
         />
         <h1>Headline apply filter measure value</h1>
         <Headline
            primaryMeasure={Ldm.m_Amount}
            filters={[LdmExt.filterAmount_GreaterThan]}
         />
         <h1>Insight has only measures</h1>
         <ColumnChart
            measures={[Ldm.m_Amount, Ldm.m_AvgAmount]}
            filters={[LdmExt.filterAmount_GreaterThan]}
         />
         <h1>Insight has many measures that there are more than one measure value filter, but each filter references to the same measure.</h1>
         <h3>1. Filter duplicate 1 measure: Difference logical-operators</h3>
         <ColumnChart
            measures={[Ldm.m_Amount, Ldm.m_AmountRatio]}
            viewBy={[Ldm.a_Product]}
            filters={[LdmExt.filterAmount_GreaterThan, LdmExt.filterAmount_NotBetween]}
         />
         <h3>1. Filter duplicate 1 measure: Difference value</h3>
         <ColumnChart
            measures={[Ldm.m_Amount, Ldm.m_AmountRatio]}
            viewBy={[Ldm.a_Product]}
            filters={[LdmExt.filterAmount_GreaterThan, LdmExt.filterAmount_GreaterThan_differencevalue]}
         />
         <h3>2. Filter duplicate 1 measure: same value</h3>
         <ColumnChart
            measures={[Ldm.m_Amount, Ldm.m_AmountRatio]}
            viewBy={[Ldm.a_Product]}
            filters={[LdmExt.filterAmount_GreaterThan, LdmExt.filterAmount_GreaterThan_samevalue]}
         />
         <h3>3. Filter duplicate more measures</h3>
         <ColumnChart
            measures={[Ldm.m_Amount, Ldm.m_AmountRatio]}
            viewBy={[Ldm.a_Product]}
            filters={[LdmExt.filterAmount_GreaterThan, LdmExt.filterAmount_NotBetween, LdmExt.filterAmountRatio_GreaterThan, LdmExt.filterAmountRatio_LessThan]}
         />
         <h1>Insight applies measure value filters that reference measure that is not in the AFM</h1>
         <ColumnChart
            measures={[Ldm.m_Amount]}
            viewBy={[Ldm.a_Product]}
            filters={[LdmExt.filterAmountRatio_GreaterThan]}
         />
      </div>
   ))
   .add('Visualization ', () => (
      <div style={WRAPPER_STYLE}>
         <h1>Normal measure, Ad-hoc Fact, Ad-hoc Attribute</h1>
         <h1>ATT-Date Filter, Min Amount > -400000</h1>
         <Visualization
            identifier="aagWYcrFdD5S"
            filters={[
               {
                  "measureValueFilter": {
                     "condition": {
                        "comparison": {
                           "operator": "GREATER_THAN",
                           "value": -400000
                        }
                     },
                     "measure": {
                        "localIdentifier": "f0bfefdf31df413eb09d8ceb3a651d35"
                     }
                  }
               }
            ]}
         />
         <h1>Attribute Filter, _Close [BOP] = 40659</h1>
         <Visualization
            identifier="aaeWYp5of4AP"
            filters={[
               {
                  "measureValueFilter": {
                     "condition": {
                        "comparison": {
                           "operator": "EQUAL_TO",
                           "value": 40659
                        }
                     },
                     "measure": {
                        "localIdentifier": "aff55a1e143048f08158c2567e2754b0"
                     }
                  }
               }
            ]}
         />
         <h1>Combine with local filters, Count of Opp. Snapshot, Snapshot between 3000 and 15000</h1>
         <Visualization
            identifier="aabWY3v3f91C"
            filters={[
               {
                  "measureValueFilter": {
                     "condition": {
                        "range": {
                           "operator": "BETWEEN",
                           "from": 3000,
                           "to": 15000
                        }
                     },
                     "measure": {
                        "localIdentifier": "0be7e315c6d84d8780bf51007dc23b65"
                     }
                  }
               }
            ]}
         />
         <h1>only measure value filter, Median Amount less than or = 12000</h1>
         <Visualization
            identifier="aahWYp5of4AP"
            filters={[
               {
                  "measureValueFilter": {
                     "condition": {
                        "comparison": {
                           "operator": "LESS_THAN_OR_EQUAL_TO",
                           "value": 12000
                        }
                     },
                     "measure": {
                        "localIdentifier": "181c95923a4a4bbca5ea3ae1097b78fd"
                     }
                  }
               }
            ]}
         />
         <h1>Combine all filters, Avg Amount less than 60000</h1>
         <Visualization
            identifier="aabXOST3fFdR"
            filters={[
               {
                  "measureValueFilter": {
                     "condition": {
                        "comparison": {
                           "operator": "LESS_THAN",
                           "value": 60000
                        }
                     },
                     "measure": {
                        "localIdentifier": "f0bfefdf31df413eb09d8ceb3a651d35"
                     }
                  }
               }
            ]}
         />
         <h1>Derived SPLY/PP</h1>
         <h1>Combine all filters, Amount Negative-period ago != 96000</h1>
         <Visualization
            identifier="aabYfa1ka3dM"
            filters={[
               {
                  "measureValueFilter": {
                     "condition": {
                        "comparison": {
                           "operator": "NOT_EQUAL_TO",
                           "value": 96000
                        }
                     },
                     "measure": {
                        "localIdentifier": "e08b94c9dbeb4382b3027cb5da075b1f_previous_period"
                     }
                  }
               }
            ]}
         />
         <h1>Combine all filters, Amount[BOP]-SP year ago >= 2000000</h1>
         <Visualization
            identifier="aadYfa1ka3dM"
            filters={[
               {
                  "measureValueFilter": {
                     "condition": {
                        "comparison": {
                           "operator": "GREATER_THAN_OR_EQUAL_TO",
                           "value": 2000000
                        }
                     },
                     "measure": {
                        "localIdentifier": "a69896f13d2948a5aaea02d5c22ae6b6_pop"
                     }
                  }
               }
            ]}
         />
         <h1>AM/derive AM</h1>
         <h1>Combine all filters, Difference of Avg Amount >=0 -> check data show 2010,2013</h1>
         <Visualization
            identifier="aabYinzuhoJY"
            filters={[
               {
                  "measureValueFilter": {
                     "condition": {
                        "comparison": {
                           "operator": "GREATER_THAN_OR_EQUAL_TO",
                           "value": 0
                        }
                     },
                     "measure": {
                        "localIdentifier": "110ecb65904d4eb6acd24b9f6a35cbd3"
                     }
                  }
               }
            ]}
         />
         <h1>Combine all filters, Change-PP between -0.1 and 2 -> check data show 2011,2013</h1>
         <Visualization
            identifier="aagYhsAShoCJ"
            filters={[
               {
                  "measureValueFilter": {
                     "condition": {
                        "range": {
                           "operator": "BETWEEN",
                           "from": -0.1,
                           "to": 2
                        }
                     },
                     "measure": {
                        "localIdentifier": "110ecb65904d4eb6acd24b9f6a35cbd3"
                     }
                  }
               }
            ]}
         />
         <h1>Combine all filters, Ratio of… -SP year ago not between 0.5 and 1
                        -> check data show 2011,2012</h1>
         <Visualization
            identifier="aadYibo5hoGm"
            filters={[
               {
                  "measureValueFilter": {
                     "condition": {
                        "range": {
                           "operator": "NOT_BETWEEN",
                           "from": 0.5,
                           "to": 1
                        }
                     },
                     "measure": {
                        "localIdentifier": "110ecb65904d4eb6acd24b9f6a35cbd3_pop"
                     }
                  }
               }
            ]}
         />
         <h1>Ratio - Combine all filters</h1>
         <Visualization
            identifier="aad2RgVtdKFY"
            filters={[
               {
                  "measureValueFilter": {
                     "condition": {
                        "comparison": {
                           "operator": "GREATER_THAN_OR_EQUAL_TO",
                           "value": 0.8
                        }
                     },
                     "measure": {
                        "localIdentifier": "1821f5c3719a45c096d66921939f4aae"
                     }
                  }
               }
            ]}
         />
         <h1>Format in % - Combine all filters, Amount[BOP]>=1000000</h1>
         <Visualization
            identifier="adm3s7hoa6Uk"
            filters={[
               {
                  "measureValueFilter": {
                     "condition": {
                        "comparison": {
                           "operator": "GREATER_THAN_OR_EQUAL_TO",
                           "value": 1000000
                        }
                     },
                     "measure": {
                        "localIdentifier": "5cefcaa439af4a58b064202c2926ecf0"
                     }
                  }
               }
            ]}
         />
         <h1>Stack to % - Combine all filters</h1>
         <Visualization
            identifier="aak3KyV3dDev"
            filters={[
               {
                  "measureValueFilter": {
                     "condition": {
                        "comparison": {
                           "operator": "GREATER_THAN_OR_EQUAL_TO",
                           "value": 50
                        }
                     },
                     "measure": {
                        "localIdentifier": "a2db5e17b01e42748a0de2d438e7c14b"
                     }
                  }
               }
            ]}
         />
      </div>
   ))

   ;
