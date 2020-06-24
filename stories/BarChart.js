//author: nknbich
import React from 'react';

import { storiesOf } from '@storybook/react';
import '@gooddata/sdk-ui-charts/styles/css/main.css'; 
import { BarChart} from '@gooddata/sdk-ui-charts';
import { InsightView } from '@gooddata/sdk-ui-ext';
import { BackendProvider } from "@gooddata/sdk-ui";
import { WorkspaceProvider } from "@gooddata/sdk-ui";
import bearFactory, { ContextDeferredAuthProvider } from "@gooddata/sdk-backend-bear";
import { projectId as workspace } from "../src/constants";
import {Ldm, LdmExt} from "../src/ldm";

const backend = bearFactory().withAuthentication(new ContextDeferredAuthProvider());

const WRAPPER_STYLE = { width: 1200, height: 400 };

storiesOf('BarChart', module)
    .add('>=2M', () => (
        <div style={WRAPPER_STYLE}>
            <h1>No ratio, stackMeasuresToPercent, drill fact, bottom axis</h1>
            <BackendProvider backend={backend}>
<WorkspaceProvider workspace={workspace}>
            <BarChart
                measures={[Ldm.m_Amount, Ldm.m_AmountBOP]}
                config={{
                    stackMeasuresToPercent: true
                }}
                // drillableItems={[
                //     HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/1146`),
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>No ratio, stackMeasuresToPercent, drill fact, top axis</h1>
            <p>Apply stack to percent in this case</p>
            <BarChart
                measures={[LdmExt.m_Amount, Ldm.m_AmountBOP]}
                config={{
                    stackMeasuresToPercent: true,
                    secondary_xaxis: {
                        measures: ['Amount']
                    }
                }}
                // drillableItems={[
                //     HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/1146`),
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>Ratio, stackMeasuresToPercent, drill viewby</h1>
            <BarChart
                measures={[LdmExt.m_SumDayToCloseRatio,LdmExt.m_AmountRatio]}
                config={{
                    stackMeasuresToPercent: true
                }}
                // drillableItems={[
                //     HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/952`),
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>Ratio, stackMeasures, drill value attribute</h1>
            <BarChart
                measures={[LdmExt.m_SumDayToCloseRatio,LdmExt.m_AmountRatio]}
                config={{
                    stackMeasures: true
                }}
                // drillableItems={[
                //     HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/949/elements?id=168282`),
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            </WorkspaceProvider>  
</BackendProvider>
        </div>
    ))
    .add('>=2M 1VB', () => (
        <div style={WRAPPER_STYLE}>
            <h1>No ratio, stackMeasuresToPercent, drill fact, bottom axis</h1>
            <BackendProvider backend={backend}>
<WorkspaceProvider workspace={workspace}>
            <BarChart
                measures={[Ldm.m_Amount, Ldm.m_AmountBOP]}
                viewBy={[Ldm.a_Product]}
                config={{
                    stackMeasuresToPercent: true
                }}
                // drillableItems={[
                //     HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/1146`),
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>No ratio, stackMeasuresToPercent, drill fact, top axis</h1>
            <p>Apply stack to percent in this case</p>
            <BarChart
                measures={[LdmExt.m_Amount, Ldm.m_AmountBOP]}
                viewBy={[Ldm.a_Product]}
                config={{
                    stackMeasuresToPercent: true,
                    secondary_xaxis: {
                        measures: ['Amount']
                    }
                }}
                // drillableItems={[
                //     HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/1146`),
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>Ratio, stackMeasuresToPercent, drill viewby</h1>
            <BarChart
                measures={[LdmExt.m_SumDayToCloseRatio,LdmExt.m_AmountRatio]}
                viewBy={[Ldm.a_Product]}
                config={{
                    stackMeasuresToPercent: true
                }}
                // drillableItems={[
                //     HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/952`),
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>Ratio, stackMeasures, drill value attribute</h1>
            <BarChart
                measures={[LdmExt.m_SumDayToCloseRatio,LdmExt.m_AmountRatio]}
                viewBy={[Ldm.a_Product]}
                config={{
                    stackMeasures: true
                }}
                // drillableItems={[
                //     HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/949/elements?id=168282`),
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            </WorkspaceProvider>  
</BackendProvider>
        </div>
    ))
    .add('>=2M 2VB', () => (
        <div style={WRAPPER_STYLE}>
            <h1>No ratio, stackMeasuresToPercent, drill fact, bottom axis</h1>
            <BackendProvider backend={backend}>
<WorkspaceProvider workspace={workspace}>
            <BarChart
                measures={[Ldm.m_Amount, Ldm.m_AmountBOP]}
                viewBy={[Ldm.a_Product,Ldm.a_StageName]}
                config={{
                    stackMeasuresToPercent: true
                }}
                // drillableItems={[
                //     HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/1146`),
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>No ratio, stackMeasuresToPercent, drill fact, top axis</h1>
            <p>Apply stack to percent in this case</p>
            <BarChart
                measures={[Ldm.m_Amount, Ldm.m_AmountBOP]}
                viewBy={[Ldm.a_Product,Ldm.a_StageName]}
                config={{
                    stackMeasuresToPercent: true,
                    secondary_xaxis: {
                        measures: ['Amount']
                    }
                }}
                // drillableItems={[
                //     HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/1146`),
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>Ratio, stackMeasuresToPercent, drill viewby</h1>
            <BarChart
                measures={[LdmExt.m_SumDayToCloseRatio,LdmExt.m_AmountRatio]}
                viewBy={[Ldm.a_Product,Ldm.a_StageName]}
                config={{
                    stackMeasuresToPercent: true
                }}
                // drillableItems={[
                //     HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/952`),
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>Ratio, stackMeasures, drill value attribute</h1>
            <BarChart
                measures={[LdmExt.m_SumDayToCloseRatio,LdmExt.m_AmountRatio]}
                viewBy={[Ldm.a_Product,Ldm.a_StageName]}
                config={{
                    stackMeasures: true
                }}
                // drillableItems={[
                //     HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/949/elements?id=168282`),
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            </WorkspaceProvider>  
</BackendProvider>
        </div>
    ))
    .add('1M 1VB NoSB', () => (
        <div style={WRAPPER_STYLE}>
            <h1>No ratio, stackMeasuresToPercent, drill fact, bottom axis</h1>
            <BackendProvider backend={backend}>
<WorkspaceProvider workspace={workspace}>
            <BarChart
                measures={[LdmExt.m_SumDayToClose]}
                viewBy={[Ldm.a_Product]}
                config={{
                    stackMeasuresToPercent: true
                }}
                // drillableItems={[
                //     HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/1146`),
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>No ratio, stackMeasuresToPercent, drill fact, top axis</h1>
            <p>Apply stack to percent in this case</p>
            <BarChart
                measures={[LdmExt.m_SumDayToClose]}
                viewBy={[Ldm.a_Product]}
                config={{
                    stackMeasuresToPercent: true,
                    secondary_xaxis: {
                        measures: ['SumDayToClose']
                    }
                }}
                // drillableItems={[
                //     HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/1146`),
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>Ratio, stackMeasuresToPercent, drill viewby</h1>
            <BarChart
                measures={[LdmExt.m_SumDayToCloseRatio]}
                viewBy={[Ldm.a_Product]}
                // config={{
                //     stackMeasuresToPercent: true
                // }}
                // drillableItems={[
                //     HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/952`),
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>Ratio, stackMeasures, drill value attribute</h1>
            <BarChart
                measures={[LdmExt.m_SumDayToCloseRatio]}
                viewBy={[Ldm.a_Product]}
                config={{
                    stackMeasures: true
                }}
                // drillableItems={[
                //     HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/949/elements?id=168282`),
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
</WorkspaceProvider>  
</BackendProvider>
        </div>

    ))
    .add('1M 1VB 1SB', () => (
        <div style={WRAPPER_STYLE}>
            <h1>NoRatio, stackMeasuresToPercent, drill by viewBy</h1>
            <BackendProvider backend={backend}>
<WorkspaceProvider workspace={workspace}>
            <BarChart
                measures={[LdmExt.m_SumDayToClose]}
                viewBy={[Ldm.a_Product]}
                stackBy={Ldm.a_StageName}
                config={{
                    stackMeasuresToPercent: true
                }}
                // drillableItems={[
                //     HeaderPredicateFactory.insightMatch('label.product.id.name')
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>Ratio, stackMeasuresToPercent, drill by viewBy</h1>
            <BarChart
                measures={[LdmExt.m_SumDayToCloseRatio]}
                viewBy={[Ldm.a_Product]}
                stackBy={Ldm.a_StageName}
                config={{
                    stackMeasuresToPercent: true
                }}
                // drillableItems={[
                //     HeaderPredicateFactory.insightMatch('label.product.id.name')
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>Ratio, stackMeasures, drill by one value of stackBy</h1>
            <BarChart
                measures={[LdmExt.m_SumDayToCloseRatio]}
                viewBy={[Ldm.a_Product]}
                stackBy={Ldm.a_StageName}
                config={{
                    stackMeasures: true
                }}
                // drillableItems={[
                //     HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/1095/elements?id=966644`)
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            </WorkspaceProvider>  
</BackendProvider>
        </div>

    ))
    .add('1M 2VB NoSB', () => (
        <div style={WRAPPER_STYLE}>
            <h1>No ratio, stackMeasuresToPercent, drill by parent</h1>
            <BackendProvider backend={backend}>
<WorkspaceProvider workspace={workspace}>
            <BarChart
                measures={[LdmExt.m_SumDayToClose]}
                viewBy={[Ldm.a_Product, Ldm.a_StageName]}
                config={{
                    stackMeasuresToPercent: true
                }}
                // drillableItems={[
                //     HeaderPredicateFactory.insightMatch('label.product.id.name')
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>Ratio, stackMeasuresToPercent, drill by children</h1>
            <BarChart
                measures={[LdmExt.m_SumDayToCloseRatio]}
                viewBy={[Ldm.a_Product, Ldm.a_StageName]}
                config={{
                    stackMeasuresToPercent: true
                }}
                // drillableItems={[
                //     HeaderPredicateFactory.insightMatch('label.stage.name.stagename')
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>NoRatio, stackMeasures, check format, drill by children</h1>
            <BarChart
                measures={[LdmExt.m_SumDayToClose]}
                viewBy={[Ldm.a_Product, Ldm.a_StageName]}
                config={{
                    stackMeasures: true
                }}
                // drillableItems={[
                //     HeaderPredicateFactory.insightMatch('label.stage.name.stagename')
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            </WorkspaceProvider>  
</BackendProvider>
        </div>

    ))
    .add('1M 2VB 1SB', () => (
        <div style={WRAPPER_STYLE}>
            <h1>NoRatio, stackMeasuresToPercent, stack by child, drill by child</h1>
            <BackendProvider backend={backend}>
<WorkspaceProvider workspace={workspace}>
            <BarChart
                measures={[LdmExt.m_SumDayToClose]}
                viewBy={[Ldm.a_Product, Ldm.a_StageName]}
                stackBy={Ldm.a_StageName}
                config={{
                    stackMeasuresToPercent: true
                }}
                // drillableItems={[
                //     HeaderPredicateFactory.insightMatch('label.stage.name.stagename')
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>NoRatio, stackMeasuresToPercent, stack by child, drill by parent</h1>
            <BarChart
                measures={[LdmExt.m_SumDayToClose]}
                viewBy={[Ldm.a_Product, Ldm.a_StageName]}
                stackBy={Ldm.a_StageName}
                config={{
                    stackMeasuresToPercent: true
                }}
                // drillableItems={[
                //     HeaderPredicateFactory.insightMatch('label.product.id.name')
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>Ratio, stackMeasuresToPercent, stack by parent, drill by parent</h1>
            <BarChart
                measures={[LdmExt.m_SumDayToCloseRatio]}
                viewBy={[Ldm.a_Product, Ldm.a_StageName]}
                stackBy={Ldm.a_Product}
                config={{
                    stackMeasuresToPercent: true
                }}
                // drillableItems={[
                //     HeaderPredicateFactory.insightMatch('label.product.id.name')
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>Ratio, stackMeasuresToPercent, stack by parent, drill by child</h1>
            <BarChart
                measures={[LdmExt.m_SumDayToCloseRatio]}
                viewBy={[Ldm.a_Product, Ldm.a_StageName]}
                stackBy={Ldm.a_Product}
                config={{
                    stackMeasuresToPercent: true
                }}
                // drillableItems={[
                //     HeaderPredicateFactory.insightMatch('label.stage.name.stagename')
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>NoRatio, stackMeasures, stack by different, drill by StackBy</h1>
            <BarChart
                measures={[LdmExt.m_SumDayToCloseRatio]}
                viewBy={[Ldm.a_Product, Ldm.a_StageName]}
                stackBy={Ldm.a_Department}
                config={{
                    stackMeasures: true
                }}
                // drillableItems={[
                //     HeaderPredicateFactory.insightMatch('label.owner.department')
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            </WorkspaceProvider>  
</BackendProvider>
        </div>

    ))
    .add('4M 3VB NoSB', () => (
        <div style={WRAPPER_STYLE}>
            <h1>NoRatio, stackMeasuresToPercent, stack by child, drill by ad-hoc metric Stage History</h1>
            <BackendProvider backend={backend}>
<WorkspaceProvider workspace={workspace}>
            <BarChart
                measures={[Ldm.m_OppFirstSnapshot, LdmExt.m_CountStageHistory, LdmExt.m_OpenOpps, Ldm.m_SnapshotEOP]}
                viewBy={[Ldm.a_Product, Ldm.a_StageName]}
                config={{
                    stackMeasuresToPercent: true,
                    secondary_xaxis: {
                        visible: true,
                        labelsEnabled: true,
                        measures: ['CountStageHistory', 'OpenOpps'],
                        rotation: '-90',
                        min: 0
                    }
                }}
                // drillableItems={[
                //     HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/1174`)
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>More than 2 viewBy, drill by metric Open Opps</h1>
            <h3>A. Applied with 2 viewBy in the top: Product, Stage Name</h3>
            <BarChart
                measures={[Ldm.m_OppFirstSnapshot, LdmExt.m_CountStageHistory, LdmExt.m_OpenOpps, Ldm.m_SnapshotEOP]}
                viewBy={[Ldm.a_Product, Ldm.a_StageName, Ldm.a_Department]}
                config={{
                    stackMeasuresToPercent: true,
                    secondary_xaxis: {
                        visible: true,
                        labelsEnabled: true,
                        measures: ['CountStageHistory', 'OpenOpps'],
                        rotation: '-90',
                        min: 0
                    }
                }}
                // drillableItems={[
                //     HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/13465`)
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h3>B. Filter only one valule CompuSci, Interest</h3>
            <p>gridline: false, dataLabel: true </p>
            <BarChart
                measures={[Ldm.m_OppFirstSnapshot, LdmExt.m_CountStageHistory, LdmExt.m_OpenOpps, Ldm.m_SnapshotEOP]}
                viewBy={[Ldm.a_Product, Ldm.a_StageName, Ldm.a_Department]}
                config={{
                    stackMeasuresToPercent: true,
                    secondary_xaxis: {
                        visible: true,
                        labelsEnabled: true,
                        measures: ['CountStageHistory', 'OpenOpps'],
                        rotation: '-90',
                        min: 0
                    },
                    dataLabels: {
                        visible: 'true' // 'auto' | true | false
                    },
                    grid: {
                        enabled: false // boolean
                    }
                }}
                filters={[LdmExt.filterProductCompuSci, LdmExt.filterStageNameInterest]}
                // drillableItems={[
                //     HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/13465`)
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>Ratio, stackMeasuresToPercent, stackMeasures, stack by parent</h1>
            <p>secondary_xaxis: min -90, max -90</p>
            <p>Drill by child</p>
            <BarChart
                measures={[Ldm.m_OppFirstSnapshot, LdmExt.m_CountStageHistoryRatio, LdmExt.m_OpenOpps, Ldm.m_SnapshotEOP]}
                viewBy={[Ldm.a_Product, Ldm.a_StageName]}
                config={{
                    stackMeasuresToPercent: true,
                    stackMeasures: true,
                    secondary_xaxis: {
                        visible: true,
                        labelsEnabled: true,
                        measures: ['CountStageHistory', 'OpenOpps'],
                        rotation: '-90',
                        min: -90,
                        max: 90
                    }
                }}
                // drillableItems={[
                //     HeaderPredicateFactory.insightMatch('label.stage.name.stagename')
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>NoRatio, stackMeasures, stack by different</h1>
            <p>secondary_xaxis: min 0, max 100</p>
            <p>Drill by parent</p>
            <p>separators: thousand (space) decimal (:)</p>
            <BarChart
                measures={[Ldm.m_OppFirstSnapshot, LdmExt.m_CountStageHistory, LdmExt.m_OpenOpps, Ldm.m_SnapshotEOP]}
                viewBy={[Ldm.a_Product, Ldm.a_StageName]}
                config={{
                    stackMeasures: true,
                    secondary_xaxis: {
                        visible: true,
                        labelsEnabled: true,
                        measures: ['CountStageHistory', 'OpenOpps'],
                        rotation: '-90',
                        min: 0,
                        max: 100
                    },
                    separators: {
                        thousand: ' ',
                        decimal: ':'
                    }
                }}
                // drillableItems={[
                //     HeaderPredicateFactory.insightMatch('label.product.id.name')
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>Ratio, stackMeasures, stack by different</h1>
            <h3>A. Drill by parent value</h3>
            <BarChart
                measures={[Ldm.m_OppFirstSnapshot, LdmExt.m_CountStageHistoryRatio, LdmExt.m_OpenOpps, Ldm.m_SnapshotEOP]}
                viewBy={[Ldm.a_Product, Ldm.a_StageName]}
                config={{
                    stackMeasures: true,
                    secondary_xaxis: {
                        visible: true,
                        labelsEnabled: true,
                        measures: ['CountStageHistory', 'OpenOpps'],
                        rotation: '-90',
                        min: -10,
                        max: 200
                    }
                }}
                // drillableItems={[
                //     HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/949/elements?id=168279`)
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h3>B. Drill by child value</h3>
            <BarChart
                measures={[Ldm.m_OppFirstSnapshot, LdmExt.m_CountStageHistoryRatio, LdmExt.m_OpenOpps, Ldm.m_SnapshotEOP]}
                viewBy={[Ldm.a_Product, Ldm.a_StageName]}
                config={{
                    stackMeasures: true,
                    secondary_xaxis: {
                        visible: true,
                        labelsEnabled: true,
                        measures: ['CountStageHistory', 'OpenOpps'],
                        rotation: '-90',
                        min: -1000,
                        max: 2000
                    }
                }}
                // drillableItems={[
                //     HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/1095/elements?id=966643`)
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h3>C. Drill by both parent and child value</h3>
            <BarChart
                measures={[Ldm.m_OppFirstSnapshot, LdmExt.m_CountStageHistoryRatio, LdmExt.m_OpenOpps, Ldm.m_SnapshotEOP]}
                viewBy={[Ldm.a_Product, Ldm.a_StageName]}
                config={{
                    stackMeasures: true,
                    secondary_xaxis: {
                        visible: true,
                        labelsEnabled: true,
                        measures: ['CountStageHistory', 'OpenOpps'],
                        rotation: '-90',
                        min: -1000,
                        max: 2000
                    }
                }}
                // drillableItems={[
                //     HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/949/elements?id=168279`),
                //     HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/1095/elements?id=966643`)
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            </WorkspaceProvider>  
</BackendProvider>
        </div>

    ))
    .add('Negative value', () => (
        <div style={WRAPPER_STYLE}>
            <h1>StackMeasures, drill by firstName</h1>
            <BackendProvider backend={backend}>
<WorkspaceProvider workspace={workspace}>
            <BarChart
                measures={[LdmExt.m_MinPaid, LdmExt.m_SumSalary]}
                viewBy={[Ldm.a_StartFrom, Ldm.a_FirstName]}
                config={{
                    stackMeasures: true
                }}
                // drillableItems={[
                //     HeaderPredicateFactory.insightMatch('label.persons.firstname')
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>Filter some values, StackMeasures, drill by firstName</h1>
            <BarChart
                measures={[LdmExt.m_MinPaid, LdmExt.m_SumSalary]}
                viewBy={[Ldm.a_StartFrom, Ldm.a_FirstName]}
                config={{
                    stackMeasures: true
                }}
                filters={[LdmExt.filterFirstName]}
                // drillableItems={[
                //     HeaderPredicateFactory.insightMatch('label.persons.firstname')
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>Filter some values, stackMeasuresToPercent, drill by firstName</h1>
            <BarChart
                measures={[LdmExt.m_MinPaid, LdmExt.m_SumSalary]}
                viewBy={[Ldm.a_StartFrom, Ldm.a_FirstName]}
                config={{
                    stackMeasuresToPercent: true
                }}
                filters={[LdmExt.filterFirstName]}
                // drillableItems={[
                //     HeaderPredicateFactory.insightMatch('label.persons.firstname')
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>Filter some values, stackMeasures, drill by firstName, min/max</h1>
            <p>secondary_xaxis: min -4500, max: 8000</p>
            <BarChart
                measures={[LdmExt.m_MinPaid, LdmExt.m_SumSalary]}
                viewBy={[Ldm.a_StartFrom, Ldm.a_FirstName]}
                config={{
                    stackMeasures: true,
                    secondary_xaxis: {
                        visible: true,
                        labelsEnabled: true,
                        measures: ['MinPaid'],
                        rotation: '-90',
                        min: -4500,
                        max: 8000
                    }
                }}
                filters={[LdmExt.filterFirstName]}
                // drillableItems={[
                //     HeaderPredicateFactory.insightMatch('label.persons.firstname')
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>Filter 1 value, stackMeasures, drill by firstName, min/max</h1>
            <p>xaxis: min -500, max: 900, rotation: -90</p>
            <p>secondary_xaxis: min -4500, max: 8000, rotation: 360</p>
            <BarChart
                measures={[LdmExt.m_MinPaid, LdmExt.m_SumSalary]}
                viewBy={[Ldm.a_StartFrom, Ldm.a_FirstName]}
                config={{
                    stackMeasures: true,
                    secondary_xaxis: {
                        measures: ['MinPaid'],
                        rotation: '360',
                        min: -4500,
                        max: 8000
                    },
                    xaxis: {
                        visible: true,
                        labelsEnabled: true,
                        measures: ['MinPaid'],
                        rotation: '-90',
                        min: -500,
                        max: 900
                    }
                }}
                filters={[LdmExt.filterFirstNameAnh]}
                // drillableItems={[
                //     HeaderPredicateFactory.insightMatch('label.persons.firstname')
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            </WorkspaceProvider>  
</BackendProvider>
        </div>
    ))
    .add('Different type measures', () => (
        <div style={WRAPPER_STYLE}>
            <h1>arithmeticMeasure</h1>
            <h3>A. stackMeasuresToPercent, drill stage history, config default right axis</h3>
            <BackendProvider backend={backend}>
<WorkspaceProvider workspace={workspace}>
            <BarChart
                measures={[LdmExt.m_OpenOpps, LdmExt.m_CountStageHistory, LdmExt.m_changeOfOpenOppsAndCountStageHistory, LdmExt.m_ratioOfOpenOppsAndCountStageHistory]}
                viewBy={Ldm.a_Product}
                config={{
                    stackMeasuresToPercent: true,
                    secondary_xaxis: {
                        measures: ['CountStageHistory', 'OpenOpps'],
                        rotation: '180',
                        min: 0
                    }
                }}
                // drillableItems={[
                //     HeaderPredicateFactory.composedFromUri(`/gdc/md/${Ldm.projectId}/obj/1174`)
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h3>B. stackMeasures, drill fact OpenOpps, visible secondary_xaxis</h3>
            <p>Hidden right y-axis, but apply stacked</p>
            <BarChart
                measures={[LdmExt.m_OpenOpps, LdmExt.m_CountStageHistory, LdmExt.m_changeOfOpenOppsAndCountStageHistory, LdmExt.m_ratioOfOpenOppsAndCountStageHistory]}
                viewBy={Ldm.a_Product}
                config={{
                    stackMeasures: true,
                    secondary_xaxis: {
                        measures: ['CountStageHistory', 'OpenOpps'],
                        rotation: '180',
                        visible: false
                    }
                }}
                // drillableItems={[
                //     HeaderPredicateFactory.composedFromUri(`/gdc/md/${Ldm.projectId}/obj/13465`)
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h3>C. stackMeasuresToPercent, drill stage history, labelsEnabled secondary_xaxis</h3>
            <p>Hidden right y-axis but apply stacked and show title of measures (if right y-axis has only one measure)</p>
            <BarChart
                measures={[LdmExt.m_OpenOpps, LdmExt.m_CountStageHistory, LdmExt.m_changeOfOpenOppsAndCountStageHistory]}
                viewBy={Ldm.a_Product}
                config={{
                    stackMeasuresToPercent: true,
                    secondary_xaxis: {
                        measures: ['changeOfOpenOppsAndCountStageHistory'],
                        rotation: '180',
                        labelsEnabled: false
                    }
                }}
                // drillableItems={[
                //     HeaderPredicateFactory.composedFromUri(`/gdc/md/${Ldm.projectId}/obj/1174`)
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />

            <h1>POP Measure</h1>
            <h3>A. Filter relative by quarter, stackMeasures, drill by fact</h3>
            <BarChart
                measures={[LdmExt.m_SumDayToClose, LdmExt.m_POP_SumDayToClose]}
                viewBy={[Ldm.a_Product, Ldm.a_StageName]}
                filters={[LdmExt.relativeDateQuater]}
                config={{
                    stackMeasures: true,
                    secondary_xaxis: {
                        visible: true,
                        labelsEnabled: true,
                        measures: ['POP_SumDayToClose'],
                        rotation: '-90',
                        min: -1000,
                        max: 2000
                    }
                }}
                // drillableItems={[
                //     HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/1146`)
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h3>B. Filter relative by week_us, stackMeasuresToPercent, drill by fact</h3>
            <BarChart
                measures={[LdmExt.m_SumDayToClose, LdmExt.m_POP_SumDayToClose]}
                viewBy={[Ldm.a_Product, Ldm.a_StageName]}
                filters={[LdmExt.relativeDateWeekUs]}
                config={{
                    stackMeasuresToPercent: true,
                    secondary_xaxis: {
                        visible: true,
                        labelsEnabled: true,
                        measures: ['POP_SumDayToClose'],
                        rotation: '-90',
                        min: -1000,
                        max: 2000
                    }
                }}
                // drillableItems={[
                //     HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/1146`)
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>PP Measure</h1>
            <h3>A. Absolute Date, stackMeasures, drill by fact</h3>
            <BarChart
                measures={[LdmExt.m_SumDayToClose, LdmExt.m_PP_SumDayToClose]}
                viewBy={[Ldm.a_Product, Ldm.a_StageName]}
                filters={[LdmExt.absoluteDate]}
                config={{
                    stackMeasures: true,
                    secondary_xaxis: {
                        visible: true,
                        labelsEnabled: true,
                        measures: ['POP_SumDayToClose'],
                        rotation: '-90',
                        min: -1000,
                        max: 2000
                    }
                }}
                // drillableItems={[
                //     HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/1146`)
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h3>B. Absolute Date, stackMeasuresToPercent, drill by fact</h3>
            <BarChart
                measures={[LdmExt.m_SumDayToClose, LdmExt.m_PP_SumDayToClose]}
                viewBy={[Ldm.a_Product, Ldm.a_StageName]}
                filters={[LdmExt.absoluteDate]}
                config={{
                    stackMeasuresToPercent: true,
                    secondary_xaxis: {
                        visible: true,
                        labelsEnabled: true,
                        measures: ['POP_SumDayToClose'],
                        rotation: '-90',
                        min: -1000,
                        max: 2000
                    }
                }}
                // drillableItems={[
                //     HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/1146`)
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            </WorkspaceProvider>  
</BackendProvider>
        </div>
    ))
    .add('Invalid case', () => (
        <div style={WRAPPER_STYLE}>
            <h1>Use SB with more measures</h1>
            <h3>A. No VB, stackMeasuresToPercent</h3>
            <p>Still apply stack: left stacked to percent, right stacked</p>
            <p>x axis doesn't show label because don't have viewBy</p>
            <BackendProvider backend={backend}>
<WorkspaceProvider workspace={workspace}>
            <BarChart
                measures={[Ldm.m_OppFirstSnapshot, LdmExt.m_CountStageHistory, LdmExt.m_OpenOpps, Ldm.m_SnapshotEOP]}
                stackBy={Ldm.a_Product}
                config={{
                    stackMeasuresToPercent: true,
                    secondary_xaxis: {
                        visible: true,
                        labelsEnabled: true,
                        measures: ['CountStageHistory', 'OpenOpps'],
                        rotation: '-90',
                        min: 0,
                        max: 1000
                    }
                }}
                // drillableItems={[
                //     HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/1174`)
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h3>B. Ratio, stackMeasuresToPercent, stackMeasures, stacked by parent</h3>
            <BarChart
                measures={[Ldm.m_OppFirstSnapshot, LdmExt.m_CountStageHistoryRatio, LdmExt.m_OpenOpps, Ldm.m_SnapshotEOP]}
                viewBy={[Ldm.a_Product, Ldm.a_StageName]}
                stackBy={Ldm.a_Product}
                config={{
                    stackMeasuresToPercent: true,
                    stackMeasures: true,
                    secondary_xaxis: {
                        visible: true,
                        labelsEnabled: true,
                        measures: ['CountStageHistory', 'OpenOpps'],
                        rotation: '-90',
                        min: 0,
                        max: 1000
                    }
                }}
                // drillableItems={[
                //     HeaderPredicateFactory.insightMatch('label.stage.name.stagename')
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />

            <h1>No data insight</h1>
            <BarChart
                measures={[LdmExt.m_OpenOpps]}
                viewBy={Ldm.a_Product}
                stackBy={Ldm.a_StageName}
                filters={[LdmExt.filterProductTouchAll]}
            />

            <h1>Too large</h1>
            <BarChart
                measures={[Ldm.m_Amount]}
                viewBy={Ldm.a_Account}
            />

            <h1>Can't render</h1>
            <BarChart
                measures={[Ldm.m_Amount]}
                viewBy={Ldm.a_Activity}
                stackBy={Ldm.a_StageName}
            />
            </WorkspaceProvider>  
</BackendProvider>
        </div>

    ))
    .add('InsightView + Locale', () => (
        <div style={WRAPPER_STYLE}>
            <BackendProvider backend={backend}>
<WorkspaceProvider workspace={workspace}>
            <h1>InsightView</h1>
            <p>A. Drill</p>
            <p>Insight: <a href="https://staging3.intgdc.com/analyze/#/juobzgs3d6afugtvyp66t537io1uw15f/75551/edit">Bar-Dual-Stack% - do not delete</a></p>
            <InsightView
                insight={Ldm.Insights.BarChart}
                // drillableItems={[
                //     HeaderPredicateFactory.insightMatch('label.product.id.name')
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <p>B. Locale fr-FR</p>
            <p>Insight: <a href="https://staging3.intgdc.com/analyze/#/juobzgs3d6afugtvyp66t537io1uw15f/75551/edit">Bar-Dual-Stack% - do not delete</a></p>
            <InsightView
                insight={Ldm.Insights.BarChart}

                // drillableItems={[
                //     HeaderPredicateFactory.insightMatch('label.product.id.name')
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
</WorkspaceProvider>  
</BackendProvider>
        </div>
    ))
    .add('Stacked Bar Chart - sorting', () => (
        <div style={WRAPPER_STYLE}>
            <h1>>=2 measures, 1 viewBy</h1>
            <h1>No Ratio, stackMeasuresToPercent, drill by viewBy, sort by product value</h1>
            <BackendProvider backend={backend}>
<WorkspaceProvider workspace={workspace}>
            <BarChart
                measures={[LdmExt.m_SumDayToClose, Ldm.m_Amount]}
                viewBy={[LdmExt.a_Product]}
                config={{
                    stackMeasuresToPercent: true
                }}
                sortBy={[Ldm.s_sortbyProductTotal]}
                // drillableItems={[
                //     HeaderPredicateFactory.insightMatch('label.product.id.name')
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />

            <h1>1 measures, 2 viewBys</h1>
            <h1>No Ratio, stackMeasuresToPercent, drill by viewBy, sort by product value</h1>
            <BarChart
                measures={[Ldm.m_Amount]}
                viewBy={[LdmExt.a_Product, Ldm.a_StageName]}
                config={{
                    stackMeasuresToPercent: true
                }}
                sortBy={[Ldm.s_sortbyProductTotal]}
                // drillableItems={[
                //     HeaderPredicateFactory.insightMatch('label.product.id.name')
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />

            <h1>>=2 measures, 2 viewBys</h1>
            <h1>No Ratio, stackMeasuresToPercent, drill by viewBy, sort by product value</h1>
            <BarChart
                measures={[Ldm.m_Amount, Ldm.m_AmountBOP]}
                viewBy={[LdmExt.a_Product, Ldm.a_StageName]}
                config={{
                    stackMeasuresToPercent: true
                }}
                sortBy={[Ldm.s_sortbyProductTotal]}
                // drillableItems={[
                //     HeaderPredicateFactory.insightMatch('label.product.id.name')
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />

            <h1>1 measures, 1 viewBy</h1>
            <h1>No Ratio, stackMeasuresToPercent, drill by viewBy, sort by product value</h1>
            <BarChart
                measures={[Ldm.m_Amount]}
                viewBy={[LdmExt.a_Product]}
                config={{
                    stackMeasuresToPercent: true
                }}
                sortBy={[Ldm.s_sortbyProductTotal]}
                // drillableItems={[
                //     HeaderPredicateFactory.insightMatch('label.product.id.name')
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />

            <h1>1 measure 1 viewBy 1 stackBy</h1>
            <h1>No Ratio, stackMeasuresToPercent, drill by viewBy, sort by product value</h1>
            <BarChart
                measures={[LdmExt.m_SumDayToClose]}
                viewBy={[LdmExt.a_Product]}
                stackBy={Ldm.a_StageName}
                config={{
                    stackMeasuresToPercent: true
                }}
                sortBy={[Ldm.s_sortbyProductTotal]}
                // drillableItems={[
                //     HeaderPredicateFactory.insightMatch('label.product.id.name')
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>Ratio, stackMeasuresToPercent, drill by viewBy, sort by product value</h1>
            <BarChart
                measures={[LdmExt.m_SumDayToCloseRatio]}
                viewBy={[Ldm.a_Product]}
                stackBy={Ldm.a_StageName}
                config={{
                    stackMeasuresToPercent: true
                }}
                sortBy={[Ldm.s_sortbyProductTotal]}
                // drillableItems={[
                //     HeaderPredicateFactory.insightMatch('label.product.id.name')
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>Ratio, stackMeasures, drill by one value of stackBy, sort by product value</h1>
            <BarChart
                measures={[LdmExt.m_SumDayToCloseRatio]}
                viewBy={[LdmExt.a_Product]}
                stackBy={Ldm.a_StageName}
                config={{
                    stackMeasures: true
                }}
                sortBy={[Ldm.s_sortbyProductTotal]}
                // drillableItems={[
                //     HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/1095/elements?id=966644`)
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>1 measure 2 viewBy 1 stackBy</h1>
            <h1>NoRatio, stackMeasuresToPercent, stack by child, drill by child, sort by StageName value</h1>
            <BarChart
                measures={[LdmExt.m_SumDayToClose]}
                viewBy={[LdmExt.a_Product, Ldm.a_StageName]}
                stackBy={Ldm.a_StageName}
                config={{
                    stackMeasuresToPercent: true
                }}
                filters={[LdmExt.filterStageNameInterestShortList]}
                sortBy={[Ldm.s_sortbyProductTotal]}
                // drillableItems={[
                //     HeaderPredicateFactory.insightMatch('label.stage.name.stagename')
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>NoRatio, stackMeasuresToPercent, stack by child, drill by parent, sort by product value</h1>
            <BarChart
                measures={[LdmExt.m_SumDayToClose]}
                viewBy={[LdmExt.a_Product, Ldm.a_StageName]}
                stackBy={Ldm.a_StageName}
                config={{
                    stackMeasuresToPercent: true
                }}
                sortBy={[Ldm.s_sortbyProductTotal]}
                // drillableItems={[
                //     HeaderPredicateFactory.insightMatch('label.product.id.name')
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>Ratio, stackMeasuresToPercent, stack by parent, drill by parent, sort by product value</h1>
            <BarChart
                measures={[LdmExt.m_SumDayToClose]}
                viewBy={[LdmExt.a_Product, Ldm.a_StageName]}
                stackBy={LdmExt.a_Product}
                config={{
                    stackMeasuresToPercent: true
                }}
                sortBy={[Ldm.s_sortbyProductTotal]}
                // drillableItems={[
                //     HeaderPredicateFactory.insightMatch('label.product.id.name')
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>Ratio, stackMeasuresToPercent, stack by parent, drill by child, sort by product value</h1>
            <BarChart
                measures={[LdmExt.m_SumDayToClose]}
                viewBy={[LdmExt.a_Product, Ldm.a_StageName]}
                stackBy={LdmExt.a_Product}
                config={{
                    stackMeasuresToPercent: true
                }}
                sortBy={[Ldm.s_sortbyProductTotal]}
                // drillableItems={[
                //     HeaderPredicateFactory.insightMatch('label.stage.name.stagename')
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>NoRatio, stackMeasures, stack by different, drill by StackBy, sort by product value</h1>
            <BarChart
                measures={[LdmExt.m_SumDayToCloseRatio]}
                viewBy={[LdmExt.a_Product, Ldm.a_StageName]}
                stackBy={Ldm.a_Department}
                config={{
                    stackMeasures: true
                }}
                sortBy={[Ldm.s_sortbyProductTotal]}
                // drillableItems={[
                //     HeaderPredicateFactory.insightMatch('label.owner.department')
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>Negative</h1>
            <h1>No Ratio, stackMeasuresToPercent, drill by viewBy, sort by product value</h1>
            <BarChart
                measures={[Ldm.m_AmountNegative]}
                viewBy={[LdmExt.a_Product]}
                stackBy={Ldm.a_StageName}
                config={{
                    stackMeasuresToPercent: true
                }}
                sortBy={[Ldm.s_sortbyProductTotal]}
                // drillableItems={[
                //     HeaderPredicateFactory.insightMatch('label.product.id.name')
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>Ratio, stackMeasuresToPercent, drill by viewBy, sort by product value</h1>
            <BarChart
                measures={[Ldm.m_AmountNegative]}
                viewBy={[LdmExt.a_Product]}
                stackBy={Ldm.a_StageName}
                config={{
                    stackMeasuresToPercent: true
                }}
                sortBy={[Ldm.s_sortbyProductTotal]}
                // drillableItems={[
                //     HeaderPredicateFactory.insightMatch('label.product.id.name')
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <h1>Ratio, stackMeasures, drill by one value of stackBy, sort by product value</h1>
            <BarChart
                measures={[Ldm.m_AmountNegative]}
                viewBy={[LdmExt.a_Product]}
                stackBy={Ldm.a_StageName}
                config={{
                    stackMeasures: true
                }}
                sortBy={[Ldm.s_sortbyProductTotal]}
                // drillableItems={[
                //     HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/1095/elements?id=966644`)
                // ]}
                // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
            />
            <InsightView
            projectId={Ldm.projectId}
            insight="aalW06ayiBwo"
            sortBy={[
                {
                    "attributeSortItem": {
                            "direction": 'desc', 
                            "attributeinsight": 'e469b79b91e240d98f4fc9d38372a3ed',
                            "aggregation": 'sum' 
                        }
                    }
            ]}
            
        />
        </WorkspaceProvider>  
</BackendProvider>
        </div>
    ));
