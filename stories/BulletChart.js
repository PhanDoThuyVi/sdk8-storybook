import React from "react";

import { storiesOf } from "@storybook/react";
import '@gooddata/sdk-ui-charts/styles/css/main.css'; 
import {
    BulletChart
} from "@gooddata/sdk-ui-charts";
import { InsightView } from '@gooddata/sdk-ui-ext';
import { BackendProvider } from "@gooddata/sdk-ui";
import { WorkspaceProvider } from "@gooddata/sdk-ui";
import bearFactory, { ContextDeferredAuthProvider } from "@gooddata/sdk-backend-bear";
import { projectId as workspace } from "../src/constants";
import {Ldm, LdmExt} from "../src/ldm";

const backend = bearFactory().withAuthentication(new ContextDeferredAuthProvider());

const WRAPPER_STYLE = { width: 1200, height: 400 };
// let exportResult: any;

// function onExportReady(execution: any) {
//     exportResult = execution;
// }

// async function doExport() {
//     const result = await exportResult({
//         format: "xlsx",
//         includeFilterContext: true,
//         mergeHeaders: true,
//     });
//     window.open(result.uri);
// }

storiesOf("Bullet Chart", module)
    .add("Basic bullet chart", () => (
        <div style={WRAPPER_STYLE}>
            <h1>3M</h1>
            <BackendProvider backend={backend}>
<WorkspaceProvider workspace={workspace}>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    primaryMeasure={Ldm.m_AmountBOP}
                    targetMeasure={Ldm.m_AvgAmount}
                    comparativeMeasure={Ldm.m_Amount}
                />
            </div>
            <h1>Primary measure + Target measure</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    primaryMeasure={Ldm.m_AmountBOP}
                    targetMeasure={Ldm.m_AvgAmount}
                />
            </div>
            <h1>Primary measure + Comparative measure</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    primaryMeasure={Ldm.m_AmountBOP}
                    comparativeMeasure={Ldm.m_Amount}
                />
            </div>
            <h1>Primary measure</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    primaryMeasure={Ldm.m_AmountBOP}
                />
            </div> 
             {/* <h1>Comparative measure</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    comparativeMeasure={Ldm.m_AmountBOP}
                />
            </div> */}
            {/*<h1>Target measure</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    targetMeasure={Ldm.m_AvgAmount}
                />
            </div> */}
            <h1>3M + 2VB</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    primaryMeasure={Ldm.m_AmountBOP}
                    targetMeasure={Ldm.m_AvgAmount}
                    comparativeMeasure={Ldm.m_Amount}
                    viewBy={[LdmExt.a_StageName, LdmExt.a_Product]}
                />
            </div>
            <h1>Primary measure + Target measure + 2VB</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    primaryMeasure={Ldm.m_AmountBOP}
                    targetMeasure={Ldm.m_AvgAmount}
                    viewBy={[LdmExt.a_StageName, LdmExt.a_Product]}
                />
            </div>
             <h1>Primary measure + Comparative measure + 2VB</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    primaryMeasure={Ldm.m_AmountBOP}
                    comparativeMeasure={Ldm.m_Amount}
                    viewBy={[LdmExt.a_StageName, LdmExt.a_Product]}
                />
            </div>
           <h1>Primary measure + 2VB</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    primaryMeasure={Ldm.m_AmountBOP}
                    viewBy={[LdmExt.a_StageName, LdmExt.a_Product]}
                />
            </div>
            {/* <h1>Target measure + 2VB</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    targetMeasure={Ldm.m_AmountBOP}
                    viewBy={[LdmExt.a_StageName, LdmExt.a_Product]}
                />
            </div>  */}
            </WorkspaceProvider>  
</BackendProvider>
        </div>
    ))
    .add("Special bullet chart", () => (
        <div style={WRAPPER_STYLE}>
            <h1>Too many data point</h1>
            <BackendProvider backend={backend}>
<WorkspaceProvider workspace={workspace}>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    primaryMeasure={Ldm.m_AmountBOP}
                    targetMeasure={Ldm.m_AvgAmount}
                    comparativeMeasure={Ldm.m_Amount}
                    viewBy={[Ldm.a_Account, Ldm.a_Opportunity]}
                />
            </div>
            <h1>Invalid</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    primaryMeasure={Ldm.m_AmountBOP}
                    targetMeasure={Ldm.m_AvgAmount}
                    comparativeMeasure={Ldm.m_Amount}
                    viewBy={[Ldm.Location0.State]}
                />
            </div>
            <h1>No data</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    primaryMeasure={Ldm.m_AmountBOP}
                    targetMeasure={Ldm.m_AvgAmount}
                    comparativeMeasure={Ldm.m_Amount}
                    viewBy={[Ldm.a_StageName]}
                    filters={[LdmExt.filterabsoluteYearSnapshot]}
                />
            </div>
            <h1>
                All measures on the primary, target, comparative measure are as
                the same
            </h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    primaryMeasure={LdmExt.m_Amount}
                    targetMeasure={LdmExt.m_Amount1}
                    comparativeMeasure={LdmExt.m_Amount2}
                    viewBy={[Ldm.a_StageName]}
                />
            </div>
            <h1>Negative bullet chart</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    primaryMeasure={Ldm.m_AmountNegative}
                    targetMeasure={Ldm.m_AvgAmount}
                    comparativeMeasure={Ldm.m_Amount}
                    viewBy={[Ldm.a_StageName]}
                />
            </div>
            <h1>Protected attribute</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    primaryMeasure={Ldm.m_AmountBOP}
                    targetMeasure={Ldm.m_AvgAmount}
                    comparativeMeasure={Ldm.m_Amount}
                    viewBy={[Ldm.a_StageName]}
                />
            </div>
            <h1>Element Masking</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    primaryMeasure={Ldm.m_SnapshotEOP}
                    targetMeasure={Ldm.m_SnapshotBOP}
                    comparativeMeasure={Ldm.m_OppFirstSnapshot}
                    viewBy={[Ldm.a_Priority]}
                />
            </div>
            </WorkspaceProvider>  
</BackendProvider>
        </div>
    ))
    .add("Different type measures", () => (
        <div style={WRAPPER_STYLE}>
            <h1>Applies PP</h1>
            <BackendProvider backend={backend}>
<WorkspaceProvider workspace={workspace}>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    primaryMeasure={LdmExt.m_Amount}
                    targetMeasure={LdmExt.m_AvgAmount}
                    comparativeMeasure={LdmExt.m_PP_Amount}
                    viewBy={[Ldm.a_YearSnapshot, Ldm.a_StageName]}
                    filters={[LdmExt.relativeYearSnapshot]}
                />
            </div>
            <h1>Applies SPLY</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    primaryMeasure={LdmExt.m_Amount}
                    targetMeasure={LdmExt.m_AvgAmount}
                    comparativeMeasure={LdmExt.m_POP_Amount}
                    viewBy={[Ldm.a_YearSnapshot, Ldm.a_StageName]}
                    filters={[LdmExt.relativeYearSnapshot]}
                />
            </div>
            <h1>Applies AM</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    primaryMeasure={Ldm.PopulationSum}
                    targetMeasure={Ldm.PopulationMin}
                    comparativeMeasure={LdmExt.m_Sum_SumPopulation}
                    viewBy={[Ldm.a_YearSnapshot,Ldm.a_State]}
                />
            </div>
            <h1>Applies Derive AM</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                   primaryMeasure={LdmExt.m_Sum_SumPopulation}
                   targetMeasure={Ldm.PopulationSum}
                    comparativeMeasure={LdmExt.m_derive_AM_Population}
                    viewBy={[Ldm.a_YearSnapshot,Ldm.Location0.State]}
                />
            </div>
            </WorkspaceProvider>  
</BackendProvider>
        </div>
    ))
    .add("Apply configuration panel", () => (
        <div style={WRAPPER_STYLE}>
            <h1>Bullet chart applies colors</h1>
            <h1>Case 1: palette color</h1>
            <BackendProvider backend={backend}>
<WorkspaceProvider workspace={workspace}>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    primaryMeasure={Ldm.m_AmountBOP}
                    targetMeasure={Ldm.m_AvgAmount}
                    comparativeMeasure={Ldm.m_Amount}
                    viewBy={[Ldm.a_StageName]}
                    config={{
                        colorPalette: [
                            {
                                guid: "01",
                                fill: {
                                    r: 195,
                                    g: 49,
                                    b: 73,
                                },
                            },
                            {
                                guid: "02",
                                fill: {
                                    r: 168,
                                    g: 194,
                                    b: 86,
                                },
                            },
                            {
                                guid: "03",
                                fill: {
                                    r: 255,
                                    g: 230,
                                    b: 240,
                                },
                            }
                        ],
                    }}
                />
            </div>
            <h1>Case 2: custom color</h1>
            <p>custom color for Amount</p>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    primaryMeasure={Ldm.m_AmountBOP}
                    targetMeasure={Ldm.m_AvgAmount}
                    comparativeMeasure={Ldm.m_Amount}
                    viewBy={[Ldm.a_StageName]}
                    config={{
                        colorMapping: [
                            {
                                predicate: (headerItem) =>
                                    headerItem.measureHeaderItem &&
                                    headerItem.measureHeaderItem
                                        .localinsight === "Amount",
                                color: {
                                    type: "guid",
                                    value: "5",
                                },
                            },
                        ],
                    }}
                />
            </div>
            <h1>Case 3: array color</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    primaryMeasure={Ldm.m_AmountBOP}
                    targetMeasure={Ldm.m_AvgAmount}
                    comparativeMeasure={Ldm.m_Amount}
                    viewBy={[Ldm.a_StageName]}
                    config={{
                        colors: [
                            "rgb(255, 102, 163)",
                            "rgb(0, 204, 0)",
                            "rgb(255, 230, 240)"
                        ],
                    }}
                />
            </div>
            <h1>Bullet chart applies X-axis, Y-axis, legend, canvas </h1>
            <p>legend - right, grid line: not show, data labels: show</p>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    primaryMeasure={Ldm.m_AmountBOP}
                    targetMeasure={Ldm.m_AvgAmount}
                    comparativeMeasure={Ldm.m_Amount}
                    viewBy={[Ldm.a_StageName]}
                    config={{
                        xaxis: {
                            rotation: "30",
                        },
                        yaxis: {
                            name: {
                                position: "low",
                            },
                            rotation: "30",
                        },
                        dataLabels: {
                            visible: true,
                        },
                        legend: {
                            enabled: true,
                            position: "right", 
                        },
                        grid: {
                            enabled: false,
                        },
                    }}
                />
            </div>
            </WorkspaceProvider>  
</BackendProvider>
        </div>
    ))
    .add("Filter", () => (
        <div style={WRAPPER_STYLE}>
            <h1>Filter attribute in/not in</h1>
            <p>StageName: Interest, ShortList</p>
            <p>Product not in TouchAll, PhoenixSoft</p>
            <BackendProvider backend={backend}>
<WorkspaceProvider workspace={workspace}>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    primaryMeasure={Ldm.m_AmountBOP}
                    targetMeasure={Ldm.m_AvgAmount}
                    comparativeMeasure={Ldm.m_Amount}
                    viewBy={[Ldm.a_StageName, Ldm.a_Product]}
                    filters={[
                        LdmExt.filterStageNameInterestShortList,
                        LdmExt.filterProductNegative,
                    ]}
                />
            </div>
            <h1>Filter date absolute</h1>
            <p>from: '2011-01-01', to: '2011-06-30'</p>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    primaryMeasure={Ldm.m_AmountBOP}
                    targetMeasure={Ldm.m_AvgAmount}
                    comparativeMeasure={Ldm.m_Amount}
                    viewBy={[Ldm.a_YearSnapshot, Ldm.a_StageName]}
                    filters={[LdmExt.absoluteYearSnapshot]}
                />
            </div>
            <h1>Filter date relative</h1>
            <p>YearSnapshot greater than = 2012</p>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    primaryMeasure={Ldm.m_AmountBOP}
                    targetMeasure={Ldm.m_AvgAmount}
                    comparativeMeasure={Ldm.m_Amount}
                    viewBy={[Ldm.a_YearSnapshot, Ldm.a_StageName]}
                    filters={[LdmExt.relativeYearSnapshot]}
                />
            </div>
            <h1>Filter measure value</h1>
            <p>Amount > 5000000</p>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    primaryMeasure={Ldm.m_AmountBOP}
                    targetMeasure={Ldm.m_AvgAmount}
                    comparativeMeasure={Ldm.m_Amount}
                    viewBy={[Ldm.a_StageName]}
                    filters={[LdmExt.filterAmount_GreaterThan]}
                />
            </div>
            <p>Amount less than 1000000</p>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    primaryMeasure={Ldm.m_AmountBOP}
                    targetMeasure={Ldm.m_AvgAmount}
                    comparativeMeasure={Ldm.m_Amount}
                    viewBy={[Ldm.a_StageName, Ldm.a_Product]}
                    filters={[LdmExt.filterAmount_LessThan]}
                />
            </div>
            <h1>Combine all filters</h1>
            <p>StageName not in Closed Lost</p>
            <p>YearSnapshot greater than = 2012</p>
            <p>Amount not between 0 and 20000000</p>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    primaryMeasure={Ldm.m_AmountBOP}
                    targetMeasure={Ldm.m_AvgAmount}
                    comparativeMeasure={Ldm.m_Amount}
                    viewBy={[Ldm.a_YearSnapshot, Ldm.a_StageName]}
                    filters={[
                        LdmExt.filterStageNameNegative,
                        LdmExt.relativeYearSnapshot,
                        LdmExt.filterAmount_NotBetween,
                    ]}
                />
            </div>
            </WorkspaceProvider>  
</BackendProvider>
        </div>
    ))
    .add("Drill", () => (
        <div style={WRAPPER_STYLE}>
            <h1>Drill event on bullet chart</h1>
            <p>drill Amount, Amount[BOP], Avg.Amount, StageName</p>
            <BackendProvider backend={backend}>
<WorkspaceProvider workspace={workspace}>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    primaryMeasure={Ldm.m_AmountBOP}
                    targetMeasure={Ldm.m_AvgAmount}
                    comparativeMeasure={Ldm.m_Amount}
                    viewBy={[Ldm.a_StageName, Ldm.a_Product]}
                    // drillableItems={[
                    //     HeaderPredicateFactory.uriMatch(
                    //         `/gdc/md/${Ldm.projectId}/obj/2858`
                    //     ),
                    //     HeaderPredicateFactory.uriMatch(
                    //         `/gdc/md/${Ldm.projectId}/obj/62827`
                    //     ),
                    //     HeaderPredicateFactory.uriMatch(
                    //         `/gdc/md/${Ldm.projectId}/obj/1279`
                    //     ),
                    //     HeaderPredicateFactory.uriMatch(
                    //         `/gdc/md/${Ldm.projectId}/obj/1805`
                    //     ),
                    // ]}
                    // onFiredDrillEvent={(data) => {
                    //     console.log(data.executionContext);
                    //     console.log(data.drillContext);
                    // }}
                />
            </div>
            </WorkspaceProvider>  
</BackendProvider>
        </div>
    ))
    .add("Export", () => (
        <div style={WRAPPER_STYLE}>
            <h1>Export to xlsx</h1>
            <BackendProvider backend={backend}>
<WorkspaceProvider workspace={workspace}>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    primaryMeasure={Ldm.m_AmountBOP}
                    targetMeasure={Ldm.m_AvgAmount}
                    comparativeMeasure={Ldm.m_Amount}
                    viewBy={[Ldm.a_YearSnapshot, Ldm.a_StageName]}
                    filters={[
                        LdmExt.filterStageNameNegative,
                        LdmExt.relativeYearSnapshot,
                        LdmExt.filterAmount_NotBetween,
                    ]}
                    // onExportReady={onExportReady}
                />
                {/* <button onClick={doExport}>Export</button> */}
            </div>
            </WorkspaceProvider>  
</BackendProvider>
        </div>
    ))
    .add("Localization", () => (
        <div style={WRAPPER_STYLE}>
            <h1>Localization: fr-FR</h1>
            <BackendProvider backend={backend}>
<WorkspaceProvider workspace={workspace}>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <BulletChart
                    primaryMeasure={Ldm.m_AmountBOP}
                    targetMeasure={Ldm.m_AvgAmount}
                    comparativeMeasure={Ldm.m_Amount}
                    viewBy={[Ldm.a_YearSnapshot, Ldm.a_StageName]}
                    locale="fr-FR"
                />
            </div>
            </WorkspaceProvider>  
</BackendProvider>
        </div>
    ))
    .add("Visualizaton", () => (
        <div style={WRAPPER_STYLE}>
            <h1>Render bullet chart</h1>
            <BackendProvider backend={backend}>
<WorkspaceProvider workspace={workspace}>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <InsightView
                    insight={Ldm.Insights.BulletChart1}
                />
            </div>
            <h1>Config bullet chart</h1>
            <p>Colors, X-axis, Y-axis, legend, canvas</p>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <InsightView
                    insight={Ldm.Insights.BulletChart1}
                    config={{
                        xaxis: {
                            rotation: "30",
                        },
                        yaxis: {
                            name: {
                                position: "low",
                            },
                            rotation: "30",
                        },
                        dataLabels: {
                            visible: true,
                        },
                        legend: {
                            enabled: true,
                            position: "right", 
                        },
                        grid: {
                            enabled: false,
                        },
                    }}
                />
            </div>
            <h1>Bullet chart applies POP, AM sum</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <InsightView
                    insight={Ldm.Insights.BulletChart2}
                />
            </div>
            <h1>Bullet chart applies PP, AM Different</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <InsightView
                    insight={Ldm.Insights.BulletChart3}
                />
            </div>
            <h1>Combine filter attribute + Export</h1>
            <p>StageName: Short List</p>
            <p>Product not in CompuSci, Explorer</p>
            <p>Amount >= 300000</p>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <InsightView
                    insight={Ldm.Insights.BulletChart1}
                    filters={[
                        {
                            positiveAttributeFilter: {
                                displayForm: {
                                    uri:
                                        "/gdc/md/cxmrlinh0gcspntxsytkwcky7gkay4so/obj/1805",
                                },
                                in: [
                                    "/gdc/md/cxmrlinh0gcspntxsytkwcky7gkay4so/obj/1095/elements?id=1251",
                                ],
                            },
                        },
                        {
                            negativeAttributeFilter: {
                                displayForm: {
                                    uri:
                                        "/gdc/md/cxmrlinh0gcspntxsytkwcky7gkay4so/obj/952",
                                },
                                notIn: [
                                    "/gdc/md/cxmrlinh0gcspntxsytkwcky7gkay4so/obj/949/elements?id=169655",
                                    "/gdc/md/cxmrlinh0gcspntxsytkwcky7gkay4so/obj/949/elements?id=168279",
                                ],
                            },
                        },
                        // {
                        //     "measureValueFilter": {
                        //         "condition": {
                        //             "comparison": {
                        //                 "operator": "GREATER_THAN_OR_EQUAL_TO",
                        //                 "value": 300000
                        //             }
                        //         },
                        //         "measure": {
                        //             "localinsight": "89bb2d47367142b68266633b993aa0bd"
                        //         }
                        //     }
                        // }
                    ]}
                    // onExportReady={onExportReady}
                />
                {/* <button onClick={doExport}>Export</button> */}
            </div>
            <h1>Drill event on bullet chart</h1>
            <p>drill Amount, Amount[BOP], Avg.Amount, StageName</p>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <InsightView
                    insight={Ldm.Insights.BulletChart1}
                    // drillableItems={[
                    //     HeaderPredicateFactory.uriMatch(
                    //         `/gdc/md/${Ldm.projectId}/obj/2858`
                    //     ),
                    //     HeaderPredicateFactory.uriMatch(
                    //         `/gdc/md/${Ldm.projectId}/obj/62827`
                    //     ),
                    //     HeaderPredicateFactory.uriMatch(
                    //         `/gdc/md/${Ldm.projectId}/obj/1279`
                    //     ),
                    //     HeaderPredicateFactory.uriMatch(
                    //         `/gdc/md/${Ldm.projectId}/obj/1805`
                    //     ),
                    // ]}
                    // onFiredDrillEvent={(data) => {
                    //     console.log(data.executionContext);
                    //     console.log(data.drillContext);
                    //}}
                />
            </div>
            <h1>Localization bullet chart</h1>
            <div style={{ height: 600, border: "solid 2px black" }}>
                <InsightView
                    insight={Ldm.Insights.BulletChart1}
                    locale="de-DE"
                />
            </div>
            </WorkspaceProvider>  
</BackendProvider>
        </div>
    ));
