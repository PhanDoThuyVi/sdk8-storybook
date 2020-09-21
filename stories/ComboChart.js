//ntthuong
import React from 'react';
import { storiesOf } from '@storybook/react';
import '@gooddata/sdk-ui-charts/styles/css/main.css';
import { ComboChart } from '@gooddata/sdk-ui-charts';
import { InsightView } from '@gooddata/sdk-ui-ext';
import { BackendProvider } from "@gooddata/sdk-ui";
import { WorkspaceProvider } from "@gooddata/sdk-ui";
import bearFactory, { ContextDeferredAuthProvider } from "@gooddata/sdk-backend-bear";
import { projectId as workspace } from "../src/constants";
import {Ldm, LdmExt} from "../src/ldm"
import { HeaderPredicates } from "@gooddata/sdk-ui";

const backend = bearFactory().withAuthentication(new ContextDeferredAuthProvider());
const WRAPPER_STYLE = { width: 800, height: 400 };
const DOWNLOADER_ID = 'downloader';

function onDrillHandler(data){
    console.log(data.executionContext); 
    console.log(data.drillContext);
}

let exportResult: any;

function onExportReady(execution: any){
	exportResult = execution;
}

async function doExport(){
	const result = await exportResult({
		format: 'xlsx',
		//title: 'CustomTitle',
		includeFilterContext: true,
		//showFilters: [],
		mergeHeaders: true
	});
	//downloadFile(result.uri);
	window.open(result.uri);
}

storiesOf('ComboChart/Column-Line', module)
    .add('DualAxis+Export+Drill', () => (
	<div style={WRAPPER_STYLE}>
        <p>Format: xslx ; Title: Don't config ; includeFilterContext</p>
        <p>Applied filter by string, identifier, relativeDate</p>

        <h1>Default chart type and drill by attribute value</h1>
        <BackendProvider backend={backend}>
        <WorkspaceProvider workspace={workspace}>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP, Ldm.m_ClosedEOP, LdmExt.m_SumDayToClose]}
            secondaryMeasures={[Ldm.m_SnapshotBOP, LdmExt.m_POP_SumDayToClose]}
            viewBy={[Ldm.a_Product, Ldm.a_StageName]}
            config={{
                //primaryChartType: 'column',
                //secondaryChartType: 'line'
            }}
            drillableItems={[
                HeaderPredicates.uriMatch(LdmExt.ProductUri),
             ]}
             onDrill={onDrillHandler}
			filters = {[LdmExt.filterProduct,LdmExt.filterStageName,LdmExt.relativeDateYear]}
			onExportReady = {onExportReady}
        />
		<button onClick={doExport}>Export</button> */}
        <h1>Drill by fact and show%</h1>
        <ComboChart
            primaryMeasures={[LdmExt.m_SumDayToCloseRatio]}
            secondaryMeasures={[Ldm.m_SnapshotBOP]}
            viewBy={[Ldm.a_Product, Ldm.a_StageName]}
            config={{
                primaryChartType: 'column',
                //secondaryChartType: 'line'
            }}
            drillableItems={[
                HeaderPredicates.uriMatch(LdmExt.DayToCloseUri),
                ]}
                onDrill={onDrillHandler}
            filters = {[LdmExt.filterProduct,LdmExt.filterStageName,LdmExt.relativeDateYear]}
        />

        <h1>Drill AM</h1>
        <ComboChart
            primaryMeasures={[LdmExt.m_ClosedBOP, LdmExt.m_Sum_ClosedBOP_SnapshotBOP, LdmExt.m_SumDayToClose]}
            secondaryMeasures={[LdmExt.m_SnapshotBOP]}
            viewBy={[Ldm.a_Product, Ldm.a_StageName]}
            config={{
                //primaryChartType: 'column',
                secondaryChartType: 'line'
            }}
            drillableItems={[
                HeaderPredicates.composedFromUri(LdmExt.CloseBOPUri),
                ]}
                onDrill={onDrillHandler}
            filters = {[LdmExt.filterProduct,LdmExt.filterStageName,LdmExt.relativeDateYear]}
        />
        
        <h1>Stack%</h1>
        <ComboChart
            primaryMeasures={[LdmExt.m_ClosedBOP, LdmExt.m_SnapshotBOP, LdmExt.m_PP_SumDayToClose, LdmExt.m_SumDayToClose]}
            secondaryMeasures={[LdmExt.m_Ratio_ClosedBOP_SnapshotBOP]}
            viewBy={[Ldm.a_Product, Ldm.a_StageName]}
            config={{
                primaryChartType: 'column',
                secondaryChartType: 'line',
                stackMeasuresToPercent: true
            }}
            drillableItems={[
                HeaderPredicates.identifierMatch('aaeb7jTCfexV'),
                ]}
            filters = {[LdmExt.filterProduct,LdmExt.filterStageName,LdmExt.relativeDateYear]}
            onDrill={onDrillHandler}
        />

        <h1>stack measures</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP, Ldm.m_ClosedEOP]}
            secondaryMeasures={[Ldm.m_SnapshotBOP,Ldm.m_SnapshotEOP]}
            viewBy={Ldm.a_Product}
            config={{
                //primaryChartType: 'column',
                //secondaryChartType: 'line'
                stackMeasures: true
            }}
        />

        <h1>dualAxis fasle</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_AmountBOP, Ldm.m_AvgAmount]}
            secondaryMeasures={[LdmExt.m_MinAmount,Ldm.m_AvgWon]}
            viewBy={Ldm.a_StageName}
            config={{
                stackMeasures: true,
                dualAxis: false
            }}
        />

        <h1>1PM,1SM,1VB</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_AmountBOP]}
            secondaryMeasures={[LdmExt.m_MinAmount]}
            viewBy={Ldm.a_StageName}
        />
        <h1>1PM,1SM,1VB, stack to percent</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP]}
            secondaryMeasures={[Ldm.m_ClosedEOP]}
            viewBy={Ldm.a_StageName}
            config = {{
                stackMeasuresToPercent: true
            }}
        />

        <h1>1PM,1SM,1VB, filter 1 value</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_AmountBOP]}
            secondaryMeasures={[LdmExt.m_MinAmount]}
            viewBy={Ldm.a_Deparment}
            filters = {[LdmExt.filterDepartment]}
        />

        <h1>2PM,1SM,1VB, filter 1 value</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_AmountBOP,Ldm.m_AvgAmount]}
            secondaryMeasures={[LdmExt.m_MinAmount]}
            viewBy={Ldm.a_Deparment}
            filters = {[LdmExt.filterDepartment]}
        />

        <h1>2PM,2SM,1date</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP, Ldm.m_ClosedEOP]}
            secondaryMeasures={[Ldm.m_SnapshotBOP,Ldm.m_SnapshotEOP]}
            viewBy={Ldm.a_YearClosed}
        />

        <h1>2PM,2SM,1date, stack measures</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP, Ldm.m_ClosedEOP]}
            secondaryMeasures={[Ldm.m_SnapshotBOP,Ldm.m_SnapshotEOP]}
            viewBy={Ldm.a_YearClosed}
            config = {{
                stackMeasures: true
            }
            }
        />

        <h1>2PM,2SM,1date, stack to percent</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP, Ldm.m_ClosedEOP]}
            secondaryMeasures={[Ldm.m_SnapshotBOP,Ldm.m_SnapshotEOP]}
            viewBy={Ldm.a_YearClosed}
            config = {{
                stackMeasuresToPercent: true
            }
            }
        />

        <h1>2PM,  2SM, 1 date, set min-max</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_Amount, Ldm.m_AvgAmount]}
            secondaryMeasures={[Ldm.m_AvgWon, Ldm.m_AmountBOP]}
            viewBy={Ldm.a_YearClosed}
            config={{
                dataLabels: {
                    visible: true
                },
                secondary_yaxis: {
                    visible: true,
                    labelsEnabled: true,
                    min: '800000',
                    rotation: "60"
                },
                yaxis: {
                    rotation: "60",
                    min: '400000'
                },
                xaxis: {
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
    .add('Drill Eventing', () => (
    <div style={WRAPPER_STYLE}>
        <h1>Column+column and drill eventing</h1>
        <BackendProvider backend={backend}>
<WorkspaceProvider workspace={workspace}>
        <ComboChart
            primaryMeasures={[LdmExt.m_ClosedBOP, LdmExt.m_Sum_ClosedBOP_SnapshotBOP, LdmExt.m_SumDayToClose]}
            secondaryMeasures={[LdmExt.m_SnapshotBOP, LdmExt.m_POP_SumDayToClose]}
            viewBy={Ldm.a_Product}
            config={{
                //primaryChartType: 'column',
                secondaryChartType: 'column'
            }}
            drillableItems={[
                HeaderPredicates.uriMatch(LdmExt.ProductCompuSciUri),
				HeaderPredicates.composedFromUri(LdmExt.CloseBOPUri),
				HeaderPredicates.uriMatch(LdmExt.DayToCloseUri),
            ]}
            onDrill={onDrillHandler}
            filters = {[LdmExt.filterProduct,LdmExt.filterStageName,LdmExt.relativeDateYear]}
        />

        <h1>Column+line and drill eventing</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP, Ldm.m_Sum_ClosedBOP_SnapshotBOP, LdmExt.m_SumDayToClose]}
            secondaryMeasures={[Ldm.m_SnapshotBOP, Ldm.m_POP_SumDayToClose]}
            viewBy={Ldm.a_Product}
            config={{
                //primaryChartType: 'column',
                //secondaryChartType: 'line'
            }}
            drillableItems={[
                HeaderPredicates.uriMatch(LdmExt.ProductCompuSciUri),
				HeaderPredicates.composedFromUri(LdmExt.CloseBOPUri),
				HeaderPredicates.uriMatch(LdmExt.DayToCloseUri),
            ]}
            onDrill={onDrillHandler}
            filters = {[LdmExt.filterProduct,LdmExt.filterStageName,LdmExt.relativeDateYear]}
        />

        <h1>Column+area and drill eventing</h1>
        <ComboChart
            primaryMeasures={[LdmExt.m_ClosedBOP, LdmExt.m_Sum_ClosedBOP_SnapshotBOP, LdmExt.m_SumDayToClose]}
            secondaryMeasures={[LdmExt.m_SnapshotBOP, LdmExt.m_POP_SumDayToClose]}
            viewBy={Ldm.a_Product}
            config={{
                //primaryChartType: 'column',
                secondaryChartType: 'area'
            }}
            drillableItems={[
                HeaderPredicates.uriMatch(LdmExt.ProductCompuSciUri),
				HeaderPredicates.composedFromUri(LdmExt.CloseBOPUri),
				HeaderPredicates.uriMatch(LdmExt.DayToCloseUri),,
            ]}
            onDrill={onDrillHandler}
            filters = {[LdmExt.filterProduct,LdmExt.filterStageName,LdmExt.relativeDateYear]}
        />
</WorkspaceProvider>  
</BackendProvider>
    </div>

    ))
    .add('Special combo charts', () => (
    <div style={WRAPPER_STYLE}>
        <h1>Combo chart no data</h1>
        <BackendProvider backend={backend}>
<WorkspaceProvider workspace={workspace}>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP]}
            secondaryMeasures={[Ldm.m_SnapshotBOP]}
            viewBy={Ldm.a_YearSnapshot}           
            filters = {[LdmExt.relativeDateYearSnapshot]}
        />

        <h1>Combo chart too many data points to display</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP]}
            secondaryMeasures={[Ldm.m_ClosedEOP]}
            viewBy={Ldm.a_Account}            
        />

        <h1>Combo chart only primary bucket</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP]}
            viewBy={Ldm.a_Account}            
        />

        <h1>Combo chart column only primary bucket and stack measures</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP,Ldm.m_ClosedEOP,Ldm.m_SnapshotBOP]}
            viewBy={Ldm.a_StageName} 
            config = {{
                stackMeasures: true
            }
            }          
        />
        <h1>Combo chart line only primary bucket and stack measures</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP,Ldm.m_ClosedEOP,Ldm.m_SnapshotBOP]}
            viewBy={Ldm.a_StageName} 
            config = {{
                primaryChartType: 'line',
                stackMeasures: true
            }
            }          
        />
        <h1>Combo chart area only primary bucket and stack measures</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP,Ldm.m_ClosedEOP,Ldm.m_SnapshotBOP]}
            viewBy={Ldm.a_StageName} 
            config = {{
                primaryChartType: 'area',
                stackMeasures: true
            }
            }          
        />
        <h1>Combo chart column only primary bucket and stack to percent</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP,Ldm.m_ClosedEOP,Ldm.m_SnapshotBOP]}
            viewBy={Ldm.a_YearClosed} 
            config = {{
                stackMeasuresToPercent: true
            }
            }          
        />
        <h1>Combo chart line only primary bucket and stack to percent</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP,Ldm.m_ClosedEOP,Ldm.m_SnapshotBOP]}
            viewBy={Ldm.a_YearClosed} 
            config = {{
                stackMeasuresToPercent: true,
                primaryChartType: 'line'
            }
            }          
        />
        <h1>Combo chart area only primary bucket and stack to percent</h1>
        <ComboChart
            primaryMeasures={[Ldm.m_ClosedBOP,Ldm.m_ClosedEOP,Ldm.m_SnapshotBOP]}
            viewBy={Ldm.a_YearClosed} 
            config = {{
                stackMeasuresToPercent: true,
                primaryChartType: 'area'
            }
            }          
        />
        <h1>Combo chart line only secondary bucket, 1 measure</h1>
        <ComboChart
            secondaryMeasures={[Ldm.m_ClosedEOP]}
            viewBy={Ldm.a_StageName}            
        />
        <h1>Combo chart line only secondary bucket, some measures</h1>
        <ComboChart
            secondaryMeasures={[Ldm.m_ClosedEOP,Ldm.m_ClosedBOP]}
            viewBy={Ldm.a_StageName}            
        />
        <h1>Combo chart column only secondary bucket, some measures</h1>
        <ComboChart
            secondaryMeasures={[Ldm.m_ClosedBOP,Ldm.m_ClosedEOP]}
            viewBy={Ldm.a_StageName}   
            config = {{
                secondaryChartType: 'column'
            }
            }         
        />
        <h1>Combo chart area only secondary bucket, some measures</h1>
        <ComboChart
            secondaryMeasures={[Ldm.m_ClosedBOP,Ldm.m_ClosedEOP]}
            viewBy={Ldm.a_StageName}   
            config = {{
                secondaryChartType: 'area'
            }
            }         
        />
    </WorkspaceProvider>  
</BackendProvider>
    </div>

));

