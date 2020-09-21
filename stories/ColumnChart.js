//author: nknbich
import React from 'react';
import { storiesOf } from '@storybook/react';
import '@gooddata/sdk-ui-pivot/styles/css/main.css';
import '@gooddata/sdk-ui-charts/styles/css/main.css';
import { ColumnChart } from '@gooddata/sdk-ui-charts';
import { InsightView } from '@gooddata/sdk-ui-ext';
import { BackendProvider } from "@gooddata/sdk-ui";
import { WorkspaceProvider } from "@gooddata/sdk-ui";
import bearFactory, { ContextDeferredAuthProvider } from "@gooddata/sdk-backend-bear";
import { projectId as workspace } from "../src/constants";
import {Ldm, LdmExt} from "../src/ldm"
import { HeaderPredicates } from "@gooddata/sdk-ui";

const backend = bearFactory().withAuthentication(new ContextDeferredAuthProvider());
const WRAPPER_STYLE = { width: 1200, height: 400 };

function onDrillHandler(data){
    console.log(data.executionContext); 
    console.log(data.drillContext);
}

storiesOf('ColumnChart', module)
    .add('1M 1VB NoSB', () => (
        <div style={WRAPPER_STYLE}>
            <h1>No ratio, stackMeasuresToPercent, drill fact</h1>
            <BackendProvider backend={backend}>
            <WorkspaceProvider workspace={workspace}>
            <ColumnChart
            measures={[Ldm.m_SumDayToClose.Sum]}
            viewBy={[Ldm.a_Product]}
            config={{
                stackMeasuresToPercent: true
            }}
            drillableItems={[
                HeaderPredicates.uriMatch(LdmExt.DayToCloseUri),
            ]}
            onDrill={onDrillHandler}
            />
            <h1>No ratio, stackMeasuresToPercent, drill fact</h1>
            <p>Apply stack to percent in this case</p>
            <ColumnChart
            measures={[Ldm.m_SumDayToClose.Sum]}
            viewBy={[Ldm.a_Product]}
            config={{
                stackMeasuresToPercent: true,
                secondary_yaxis:{
                    measures:['SumDayToClose']
                }
            }}
            drillableItems={[
                HeaderPredicates.uriMatch(LdmExt.DayToCloseUri),
            ]}
            onDrill={onDrillHandler}
            />
            <h1>Ratio, stackMeasuresToPercent, drill viewby</h1>
            <ColumnChart
            measures={[LdmExt.m_SumDayToCloseRatio]}
            viewBy={[Ldm.a_Product]}
            config={{
                stackMeasuresToPercent: true
            }}
            drillableItems={[
                HeaderPredicates.uriMatch(LdmExt.ProductUri),
            ]}
            onDrill={onDrillHandler}
            />
            <h1>Ratio, stackMeasures, drill value attribute</h1>
            <ColumnChart
            measures={[LdmExt.m_SumDayToCloseRatio]}
            viewBy={[Ldm.a_Product]}
            config={{
                stackMeasures: true
            }}
            drillableItems={[
                HeaderPredicates.uriMatch(LdmExt.ProductEducationlyUri),
            ]}
            onDrill={onDrillHandler}
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
            <ColumnChart
            measures={[Ldm.m_SumDayToClose.Sum]}
            viewBy={[Ldm.a_Product]}
            stackBy={Ldm.a_StageName}
            config={{
                stackMeasuresToPercent: true
            }}
            drillableItems={[
                HeaderPredicates.identifierMatch('label.product.id.name')
            ]}
            onDrill={onDrillHandler}
            />
            <h1>Ratio, stackMeasuresToPercent, drill by viewBy</h1>
            <ColumnChart
            measures={[LdmExt.m_SumDayToCloseRatio]}
            viewBy={[Ldm.a_Product]}
            stackBy={Ldm.a_StageName}
            config={{
                stackMeasuresToPercent: true
            }}
            drillableItems={[
                HeaderPredicates.identifierMatch('label.product.id.name')
            ]}
            onDrill={onDrillHandler}
            />
            <h1>Ratio, stackMeasures, drill by one value of stackBy</h1>
            <ColumnChart
            measures={[LdmExt.m_SumDayToCloseRatio]}
            viewBy={[Ldm.a_Product]}
            stackBy={Ldm.a_StageName}
            config={{
                stackMeasures: true
            }}
            drillableItems={[
                HeaderPredicates.uriMatch(LdmExt.StageNameDiscoveryUri)
            ]}
            onDrill={onDrillHandler}
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
            <ColumnChart
            measures={[Ldm.m_SumDayToClose.Sum]}
            viewBy={[Ldm.a_Product, Ldm.a_StageName]}
            config={{
                stackMeasuresToPercent: true
            }}
            drillableItems={[
                HeaderPredicates.identifierMatch('label.product.id.name')
            ]}
            onDrill={onDrillHandler}
            />
            <h1>Ratio, stackMeasuresToPercent, drill by children</h1>
            <ColumnChart
            measures={[LdmExt.m_SumDayToCloseRatio]}
            viewBy={[Ldm.a_Product, Ldm.a_StageName]}
            config={{
                stackMeasuresToPercent: true
            }}
            drillableItems={[
                HeaderPredicates.identifierMatch('label.stage.name.stagename')
            ]}
            onDrill={onDrillHandler}
            />
            <h1>NoRatio, stackMeasures, check format, drill by children</h1>
            <ColumnChart
            measures={[Ldm.m_SumDayToClose.Sum]}
            viewBy={[Ldm.a_Product, Ldm.a_StageName]}
            config={{
                stackMeasures: true
            }}
            drillableItems={[
                HeaderPredicates.identifierMatch('label.stage.name.stagename')
            ]}
            onDrill={onDrillHandler}
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
            <ColumnChart
            measures={[Ldm.m_SumDayToClose.Sum]}
            viewBy={[Ldm.a_Product, Ldm.a_StageName]}
            stackBy={Ldm.a_StageName}
            config={{
                stackMeasuresToPercent: true
            }}
            drillableItems={[
                HeaderPredicates.identifierMatch('label.stage.name.stagename')
            ]}
            onDrill={onDrillHandler}
            />
            <h1>NoRatio, stackMeasuresToPercent, stack by child, drill by parent</h1>
            <ColumnChart
            measures={[Ldm.m_SumDayToClose.Sum]}
            viewBy={[Ldm.a_Product, Ldm.a_StageName]}
            stackBy={Ldm.a_StageName}
            config={{
                stackMeasuresToPercent: true
            }}
            drillableItems={[
                HeaderPredicates.identifierMatch('label.product.id.name')
            ]}
            onDrill={onDrillHandler}
            />
            <h1>Ratio, stackMeasuresToPercent, stack by parent, drill by parent</h1>
            <ColumnChart
            measures={[LdmExt.m_SumDayToCloseRatio]}
            viewBy={[Ldm.a_Product, Ldm.a_StageName]}
            stackBy={Ldm.a_Product}
            config={{
                stackMeasuresToPercent: true
            }}
            drillableItems={[
                HeaderPredicates.identifierMatch('label.product.id.name')
            ]}
            onDrill={onDrillHandler}
            />
            <h1>Ratio, stackMeasuresToPercent, stack by parent, drill by child</h1>
            <ColumnChart
            measures={[LdmExt.m_SumDayToCloseRatio]}
            viewBy={[Ldm.a_Product, Ldm.a_StageName]}
            stackBy={Ldm.a_Product}
            config={{
                stackMeasuresToPercent: true
            }}
            drillableItems={[
                HeaderPredicates.identifierMatch('label.stage.name.stagename')
            ]}
            onDrill={onDrillHandler}
            />
            <h1>NoRatio, stackMeasures, stack by different, drill by StackBy</h1>
            <ColumnChart
            measures={[LdmExt.m_SumDayToCloseRatio]}
            viewBy={[Ldm.a_Product, Ldm.a_StageName]}
            stackBy={Ldm.a_Department}
            config={{
                stackMeasures: true
            }}
            drillableItems={[
                HeaderPredicates.identifierMatch('label.owner.department')
            ]}
            onDrill={onDrillHandler}
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
            <ColumnChart
            measures={[Ldm.m_OppFirstSnapshot, LdmExt.m_CountStageHistory, LdmExt.m_OpenOpps, Ldm.m_SnapshotEOP]}
            viewBy={[Ldm.a_Product, Ldm.a_StageName]}
            config={{
                stackMeasuresToPercent: true,
                secondary_yaxis:{
                    visible: true,
                    labelsEnabled: true,
                    measures: ['CountStageHistory', 'OpenOpps'],
                    rotation: '-90',
                    min: 0
                }
            }}
            drillableItems={[
                HeaderPredicates.uriMatch(LdmExt.CountStageHistoryUri)
            ]}
            onDrill={onDrillHandler}
            />
            <h1>More than 2 viewBy, drill by metric Open Opps</h1>
            <h3>A. Applied with 2 viewBy in the top: Product, Stage Name</h3>
            <ColumnChart
            measures={[Ldm.m_OppFirstSnapshot, LdmExt.m_CountStageHistory, LdmExt.m_OpenOpps, Ldm.m_SnapshotEOP]}
            viewBy={[Ldm.a_Product, Ldm.a_StageName, Ldm.a_Department]}
            config={{
                stackMeasuresToPercent: true,
                secondary_yaxis:{
                    visible: true,
                    labelsEnabled: true,
                    measures: ['CountStageHistory', 'OpenOpps'],
                    rotation: '-90',
                    min: 0
                }
            }}
            drillableItems={[
                HeaderPredicates.uriMatch(LdmExt.OpenOppsUri)
            ]}
            onDrill={onDrillHandler}
            />
            <h3>ATT (remove filters)-B. Filter only one valule CompuSci, Interest</h3>
            <ColumnChart
            measures={[Ldm.m_OppFirstSnapshot, LdmExt.m_CountStageHistory, LdmExt.m_OpenOpps, Ldm.m_SnapshotEOP]}
            viewBy={[Ldm.a_Product, Ldm.a_StageName, Ldm.a_Department]}
            config={{
                stackMeasuresToPercent: true,
                secondary_yaxis:{
                    visible: true,
                    labelsEnabled: true,
                    measures: ['CountStageHistory', 'OpenOpps'],
                    rotation: '-90',
                    min: 0
                }
            }}
            filters = {[LdmExt.filterProductCompuSci, LdmExt.filterStageNameInterest]}
            drillableItems={[
                HeaderPredicates.uriMatch(LdmExt.OpenOppsUri)
            ]}
            onDrill={onDrillHandler}
            />
            <h1>Ratio, stackMeasuresToPercent, stackMeasures, stack by parent</h1>
            <p>secondary_yaxis: min -90, max -90</p>
            <p>Drill by child</p>
            <ColumnChart
            measures={[Ldm.m_OppFirstSnapshot, LdmExt.m_CountStageHistoryRatio, LdmExt.m_OpenOpps, Ldm.m_SnapshotEOP]}
            viewBy={[Ldm.a_Product, Ldm.a_StageName]}
            config={{
                stackMeasuresToPercent: true,
                stackMeasures: true,
                secondary_yaxis:{
                    visible: true,
                    labelsEnabled: true,
                    measures: ['CountStageHistoryWithRatio', 'OpenOpps'],
                    rotation: '-90',
                    min: -90,
                    max: 90
                }
            }}
            drillableItems={[
                HeaderPredicates.identifierMatch('label.stage.name.stagename')
            ]}
            onDrill={onDrillHandler}
            />
            <h1>NoRatio, stackMeasures, stack by different</h1>
            <p>secondary_yaxis: min 0, max 100</p>
            <p>Drill by parent</p>
            <ColumnChart
            measures={[Ldm.m_OppFirstSnapshot, LdmExt.m_CountStageHistory, LdmExt.m_OpenOpps, Ldm.m_SnapshotEOP]}
            viewBy={[Ldm.a_Product, Ldm.a_StageName]}
            config={{
                stackMeasures: true,
                secondary_yaxis:{
                    visible: true,
                    labelsEnabled: true,
                    measures: ['CountStageHistory', 'OpenOpps'],
                    rotation: '-90',
                    min: 0,
                    max: 100
                }
            }}
            drillableItems={[
                HeaderPredicates.identifierMatch('label.product.id.name')
            ]}
            onDrill={onDrillHandler}
            />
            <h1>Ratio, stackMeasures, stack by different</h1>
            <h3>A. Drill by parent value</h3>
            <ColumnChart
            measures={[Ldm.m_OppFirstSnapshot, LdmExt.m_CountStageHistoryRatio, LdmExt.m_OpenOpps, Ldm.m_SnapshotEOP]}
            viewBy={[Ldm.a_Product, Ldm.a_StageName]}
            config={{
                stackMeasures: true,
                secondary_yaxis:{
                    visible: true,
                    labelsEnabled: true,
                    measures: ['CountStageHistory', 'OpenOpps'],
                    rotation: '-90',
                    min: -10,
                    max: 200
                }
            }}
            drillableItems={[
                HeaderPredicates.uriMatch(LdmExt.ProductCompuSciUri)
            ]}
            onDrill={onDrillHandler}
            />
            <h3>B. Drill by child value</h3>
            <ColumnChart
            measures={[Ldm.m_OppFirstSnapshot, LdmExt.m_CountStageHistoryRatio, LdmExt.m_OpenOpps, Ldm.m_SnapshotEOP]}
            viewBy={[Ldm.a_Product, Ldm.a_StageName]}
            config={{
                stackMeasures: true,
                secondary_yaxis:{
                    visible: true,
                    labelsEnabled: true,
                    measures: ['CountStageHistory', 'OpenOpps'],
                    rotation: '-90',
                    min: -1000,
                    max: 2000
                }
            }}
            drillableItems={[
                HeaderPredicates.uriMatch(LdmExt.StageNameInterestUri)
            ]}
            onDrill={onDrillHandler}
            />
            <h3>C. Drill by both parent and child value</h3>
            <ColumnChart
            measures={[Ldm.m_OppFirstSnapshot, LdmExt.m_CountStageHistoryRatio, LdmExt.m_OpenOpps, Ldm.m_SnapshotEOP]}
            viewBy={[Ldm.a_Product, Ldm.a_StageName]}
            config={{
                stackMeasures: true,
                secondary_yaxis:{
                    visible: true,
                    labelsEnabled: true,
                    measures: ['CountStageHistory', 'OpenOpps'],
                    rotation: '-90',
                    min: -1000,
                    max: 2000
                }
            }}
            drillableItems={[
                HeaderPredicates.uriMatch(LdmExt.ProductCompuSciUri),
                HeaderPredicates.uriMatch(LdmExt.StageNameInterestUri)
            ]}
            onDrill={onDrillHandler}
            /> 
            </WorkspaceProvider>  
            </BackendProvider>
        </div>
    ))
    .add('Negative value', () =>(
        <div style={WRAPPER_STYLE}>
        <h1>StackMeasures, drill by firstName</h1>
        <BackendProvider backend={backend}>
       <WorkspaceProvider workspace={workspace}>
            <ColumnChart
            measures={[Ldm.m_MinPaid.Min, Ldm.m_SumSalary.Sum]}
            viewBy={[Ldm.a_StartFrom,Ldm.a_FirstName]}
            config={{
                stackMeasures: true
            }}
            drillableItems={[
                HeaderPredicates.identifierMatch('label.persons.firstname')
            ]}
            onDrill={onDrillHandler}
        />
        <h1>ATT (remove filters)-Filter some values, StackMeasures, drill by firstName</h1>
        <ColumnChart
            measures={[Ldm.m_MinPaid.Min, Ldm.m_SumSalary.Sum]}
            viewBy={[Ldm.a_StartFrom,Ldm.a_FirstName]}
            config={{
                stackMeasures: true
            }}
            filters={[LdmExt.filterFirstName]}
            drillableItems={[
                HeaderPredicates.identifierMatch('label.persons.firstname')
            ]}
            onDrill={onDrillHandler}
        />
        <h1>ATT (remove filters)-Filter some values, stackMeasuresToPercent, drill by firstName</h1>
        <ColumnChart
            measures={[Ldm.m_MinPaid.Min.Min, Ldm.m_SumSalary.Sum]}
            viewBy={[Ldm.a_StartFrom,Ldm.a_FirstName]}
            config={{
                stackMeasuresToPercent: true
            }}
            filters={[LdmExt.filterFirstName]}
            drillableItems={[
                HeaderPredicates.identifierMatch('label.persons.firstname')
            ]}
            onDrill={onDrillHandler}
        />
        <h1>ATT (remove filters)-Filter some values, stackMeasures, drill by firstName, min/max</h1>
        <p>secondary_yaxis: min -4500, max: 8000</p>
        <ColumnChart
            measures={[LdmExt.m_MinPaid, Ldm.m_SumSalary.Sum]}
            viewBy={[Ldm.a_StartFrom,Ldm.a_FirstName]}
            config={{
                stackMeasures: true,
                secondary_yaxis:{
                    visible: true,
                    labelsEnabled: true,
                    measures: ['MinPaid'],
                    rotation: '-90',
                    min: -4500,
                    max: 8000
                }
            }}
            filters={[LdmExt.filterFirstName]}
            drillableItems={[
                HeaderPredicates.identifierMatch('label.persons.firstname')
            ]}
            onDrill={onDrillHandler}
        />
        <h1>ATT (remove filters)-Filter 1 value, stackMeasures, drill by firstName, min/max</h1>
        <p>yaxis: min -500, max: 900, rotation: -90</p>
        <p>secondary_yaxis: min -4500, max: 8000, rotation: 360</p>
        <ColumnChart
            measures={[LdmExt.m_MinPaid, Ldm.m_SumSalary.Sum]}
            viewBy={[Ldm.a_StartFrom,Ldm.a_FirstName]}
            config={{
                stackMeasures: true,
                secondary_yaxis:{
                    measures: ['MinPaid'],
                    rotation: '360',
                    min: -4500,
                    max: 8000
                },
                yaxis:{
                    visible: true,
                    labelsEnabled: true,
                    measures: ['MinPaid'],
                    rotation: '-90',
                    min: -500,
                    max: 900
                }
            }}
            filters={[LdmExt.filterFirstNameAnh]}
            drillableItems={[
                HeaderPredicates.identifierMatch('label.persons.firstname')
            ]}
            onDrill={onDrillHandler}
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
            <ColumnChart
            measures={[LdmExt.m_OpenOpps, LdmExt.m_CountStageHistory, LdmExt.m_changeOfOpenOppsAndCountStageHistory, LdmExt.m_ratioOfOpenOppsAndCountStageHistory]}
            viewBy={Ldm.a_Product}
            config={{
                stackMeasuresToPercent: true,
                secondary_yaxis:{
                    measures: ['CountStageHistory', 'OpenOpps'],
                    rotation: '180',
                    min: 0
                }
            }}
            drillableItems={[
                HeaderPredicates.composedFromUri(LdmExt.CountStageHistoryUri)
            ]}
            onDrill={onDrillHandler}
            />
            <h3>B. stackMeasures, drill fact OpenOpps, visible secondary_yaxis</h3>
            <p>Hidden right y-axis, but apply stacked</p>
            <ColumnChart
            measures={[LdmExt.m_OpenOpps, LdmExt.m_CountStageHistory, LdmExt.m_changeOfOpenOppsAndCountStageHistory, LdmExt.m_ratioOfOpenOppsAndCountStageHistory]}
            viewBy={Ldm.a_Product}
            config={{
                stackMeasures: true,
                secondary_yaxis:{
                    measures: ['CountStageHistory', 'OpenOpps'],
                    rotation: '180',
                    visible: false
                }
            }}
            drillableItems={[
                HeaderPredicates.composedFromUri(LdmExt.OpenOppsUri)
            ]}
            onDrill={onDrillHandler}
            />
            <h3>C. stackMeasuresToPercent, drill stage history, labelsEnabled secondary_yaxis</h3>
            <p>Hidden right y-axis but apply stacked and show title of measures (if right y-axis has only one measure)</p>
            <ColumnChart
            measures={[LdmExt.m_OpenOpps, LdmExt.m_CountStageHistory, LdmExt.m_changeOfOpenOppsAndCountStageHistory]}
            viewBy={Ldm.a_Product}
            config={{
                stackMeasuresToPercent: true,
                secondary_yaxis:{
                    measures: ['changeOfOpenOppsAndCountStageHistory'],
                    rotation: '180',
                    labelsEnabled: false
                }
            }}
            drillableItems={[
                HeaderPredicates.composedFromUri(LdmExt.CountStageHistoryUri)
            ]}
            onDrill={onDrillHandler}
            />
            
            <h1>POP Measure</h1>
            <h3>ATT (remove filters)-A. Filter relative by quarter, stackMeasures, drill by fact</h3>
            <ColumnChart
            measures={[LdmExt.m_SumDayToClose, LdmExt.m_POP_SumDayToClose]}
            viewBy={[Ldm.a_Product, Ldm.a_StageName]}
            filters={[LdmExt.relativeDateQuater]}
            config={{
                stackMeasures: true,
                secondary_yaxis:{
                    visible: true,
                    labelsEnabled: true,
                    measures: ['POP_SumDayToClose'],
                    rotation: '-90',
                    min: -1000,
                    max: 2000
                }
            }}
            drillableItems={[
                HeaderPredicates.uriMatch(LdmExt.DayToCloseUri)
            ]}
            onDrill={onDrillHandler}
            />
            <h3>ATT (remove filters)-B. Filter relative by week_us, stackMeasuresToPercent, drill by fact</h3>
            <ColumnChart
            measures={[LdmExt.m_SumDayToClose, LdmExt.m_POP_SumDayToClose]}
            viewBy={[Ldm.a_Product, Ldm.a_StageName]}
            filters={[LdmExt.relativeDateWeekUs]}
            config={{
                stackMeasuresToPercent: true,
                secondary_yaxis:{
                    visible: true,
                    labelsEnabled: true,
                    measures: ['POP_SumDayToClose'],
                    rotation: '-90',
                    min: -1000,
                    max: 2000
                }
            }}
            drillableItems={[
                HeaderPredicates.uriMatch(LdmExt.DayToCloseUri)
            ]}
            onDrill={onDrillHandler}
            />
            <h1>PP Measure</h1>
            <h3>ATT (remove filters)-A. Absolute Date, stackMeasures, drill by fact</h3>
            <ColumnChart
            measures={[LdmExt.m_SumDayToClose, LdmExt.m_PP_SumDayToClose]}
            viewBy={[Ldm.a_Product, Ldm.a_StageName]}
            filters={[LdmExt.absoluteDate]}
            config={{
                stackMeasures: true,
                secondary_yaxis:{
                    visible: true,
                    labelsEnabled: true,
                    measures: ['POP_SumDayToClose'],
                    rotation: '-90',
                    min: -1000,
                    max: 2000
                }
            }}
            drillableItems={[
                HeaderPredicates.uriMatch(LdmExt.DayToCloseUri)
            ]}
            onDrill={onDrillHandler}
            />
            <h3>ATT (remove filters)-B. Absolute Date, stackMeasuresToPercent, drill by fact</h3>
            <ColumnChart
            measures={[LdmExt.m_SumDayToClose, LdmExt.m_PP_SumDayToClose]}
            viewBy={[Ldm.a_Product, Ldm.a_StageName]}
            filters={[LdmExt.absoluteDate]}
            config={{
                stackMeasuresToPercent: true,
                secondary_yaxis:{
                    visible: true,
                    labelsEnabled: true,
                    measures: ['POP_SumDayToClose'],
                    rotation: '-90',
                    min: -1000,
                    max: 2000
                }
            }}
            drillableItems={[
                HeaderPredicates.uriMatch(LdmExt.DayToCloseUri)
            ]}
            onDrill={onDrillHandler}
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
            <ColumnChart
            measures={[Ldm.m_OppFirstSnapshot, LdmExt.m_CountStageHistory, LdmExt.m_OpenOpps, Ldm.m_SnapshotEOP]}
            stackBy={Ldm.a_Product}
            config={{
                stackMeasuresToPercent: true,
                secondary_yaxis:{
                    visible: true,
                    labelsEnabled: true,
                    measures: ['CountStageHistory', 'OpenOpps'],
                    rotation: '-90',
                    min: 0,
                    max: 1000
                }
            }}
            drillableItems={[
                HeaderPredicates.uriMatch(LdmExt.CountStageHistoryUri)
            ]}
            onDrill={onDrillHandler}
            />
            <h3>B. Ratio, stackMeasuresToPercent, stackMeasures, stacked by parent</h3>
            <ColumnChart
            measures={[Ldm.m_OppFirstSnapshot, LdmExt.m_CountStageHistoryRatio, LdmExt.m_OpenOpps, Ldm.m_SnapshotEOP]}
            viewBy={[Ldm.a_Product, Ldm.a_StageName]}
            stackBy={Ldm.a_Product}
            config={{
                stackMeasuresToPercent: true,
                stackMeasures: true,
                secondary_yaxis:{
                    visible: true,
                    labelsEnabled: true,
                    measures: ['CountStageHistory', 'OpenOpps'],
                    rotation: '-90',
                    min: 0,
                    max: 1000
                }
            }}
            drillableItems={[
                HeaderPredicates.identifierMatch('label.stage.name.stagename')
            ]}
            onDrill={onDrillHandler}
            />
            
            <h1>No data insight</h1>
            <ColumnChart
            measures={[Ldm.m_OpenOpps]}
            viewBy={Ldm.a_Product}
            stackBy={Ldm.a_StageName}
            filters={[LdmExt.filterProductTouchAll]}
            />

            <h1>Too large</h1>
            <ColumnChart
            measures={[Ldm.m_Amount]}
            viewBy={Ldm.a_Account}
            />

            <h1>Can't render</h1>
            <ColumnChart
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
            <h1>InsightView</h1>
            <p>A. Drill by child</p>
            <p>Insight: <a href="https://staging3.intgdc.com/analyze/#/juobzgs3d6afugtvyp66t537io1uw15f/75550/edit">Column-Dual-Stack% - do not delete</a></p>
            <BackendProvider backend={backend}>
            <WorkspaceProvider workspace={workspace}>
            <InsightView
            insight={Ldm.Insights.ColumnChart}
            drillableItems={[
                HeaderPredicates.identifierMatch('label.product.id.name')
            ]}
            onDrill={onDrillHandler}
            />
            <p>B. Locale fr-FR, Drill by child</p>
            <p>Insight: <a href="https://staging3.intgdc.com/analyze/#/juobzgs3d6afugtvyp66t537io1uw15f/75550/edit">Column-Dual-Stack% - do not delete</a></p>
            <InsightView
            insight={Ldm.Insights.ColumnChart}
            locale="fr-FR"
            drillableItems={[
                HeaderPredicates.identifierMatch('label.product.id.name')
            ]}
            onDrill={onDrillHandler}
            />
            </WorkspaceProvider>  
            </BackendProvider>
        </div>
    ));
