import React from 'react';
import { storiesOf } from '@storybook/react';
import "@gooddata/sdk-ui-geo/styles/css/main.css";
import '@gooddata/sdk-ui-charts/styles/css/main.css'; 
import {GeoPushpinChart } from '@gooddata/sdk-ui-geo';
import { InsightView } from '@gooddata/sdk-ui-ext';
import { BackendProvider } from "@gooddata/sdk-ui";
import { WorkspaceProvider } from "@gooddata/sdk-ui";
import bearFactory, { ContextDeferredAuthProvider } from "@gooddata/sdk-backend-bear";
import { projectId as workspace } from "../src/constants";
import {Ldm, LdmExt} from "../src/ldm";
//import { HeaderPredicates, IDrillEvent } from "@gooddata/sdk-ui";
//import { useState } from '@storybook/addons';
//import { attributeIdentifier, measureIdentifier } from "@gooddata/sdk-model";

const backend = bearFactory().withAuthentication(new ContextDeferredAuthProvider());
const WRAPPER_STYLE = { width: 1200, height: 400 };

// const drillableItems = [
//     HeaderPredicates.identifierMatch(attributeIdentifier(Ldm.Location0.State)!),
//     HeaderPredicates.identifierMatch(attributeIdentifier(Ldm.Location0.LatlonName)!),
//     HeaderPredicates.identifierMatch(measureIdentifier(Ldm.PopulationSum)!)
// ];

// const style = { height: 500 };

// const GeoChart: React.FC = () => {
//     const [drillEvent, setState] = useState<IDrillEvent>();

//     const onDrill = (drillEvent: IDrillEvent) => {
//         setState(drillEvent);
//     };

//     let renderDrillValue;
//     if (drillEvent) {
//         const drillColumn = drillEvent.drillContext.row![drillEvent.drillContext.columnIndex!];
//         const drillValue = typeof drillColumn === "object" ? drillColumn.name : drillColumn;
//         renderDrillValue = (
//             <h3>
//                 You have Clicked <span className="s-drill-value">{drillValue}</span>
//             </h3>
//         );
//     }
// };
storiesOf('Geo Pushpin', module)
    .add('Basic cases', () => (
        <div style={WRAPPER_STYLE}>
            <BackendProvider backend={backend}>
            <WorkspaceProvider workspace={workspace}>
            <h1>attribute on Location is geo attribute</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    location={Ldm.Location0.LatlonName}
                    config={{
                       tooltipText: Ldm.Location0.LatlonName,
                        mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg",
                        zoom: 1,
                        center: { lat: 40.922326, lng: -72.637078 },
                        points: {
                            groupNearbyPoints: true,
                            minSize: "1.5x",
                            maxSize: "1.5x"
                        }
                    }}
                />
                </div>
                <h1>Location + Size</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    location={Ldm.Location0.LatlonName}
                    size={Ldm.PopulationSum}
                    config={{
                        tooltipText:Ldm.Location0.LatlonName,
                        mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg",
                        points: {
                            groupNearbyPoints: true,
                            minSize: "0.5x",
                            maxSize: "1.5x"
                        }
                    }}
                />
            </div>
            <h1>Location + Color</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    location={Ldm.Location0.LatlonName}
                    color={Ldm.PopulationSum}
                    config={{
                        tooltipText:Ldm.Location0.LatlonName,
                        points: {
                            groupNearbyPoints: true,
                            minSize: "0.5x",
                            maxSize: "1.5x"
                        },
                        mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg"
                    }}
                />
            </div>
            <h1>Location + Segment By</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    location={Ldm.Location0.LatlonName}
                    segmentBy={Ldm.Location0.State}
                    config={{
                        points: {
                            groupNearbyPoints: true,
                            minSize: "0.5x",
                            maxSize: "1.5x"
                        },
                        mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg"
                    }}
                />
            </div>
            <h1>Location + Size + Segment By</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    location={Ldm.Location0.LatlonName}
                    size={Ldm.PopulationSum}
                    segmentBy={Ldm.Location0.State}
                    config={{
                        tooltipText:Ldm.Location0.Timezone,
                        viewport: {
                            "area": "continent_as"  },
                        points: {
                            groupNearbyPoints: true,
                            minSize: "0.5x",
                            maxSize: "1.5x"
                        },
                        mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg"
                    }}
                />
            </div>
            <h1>Location + Color + Segment By</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    location={Ldm.Location0.LatlonName}
                    color={Ldm.PopulationSum}
                    segmentBy={Ldm.Location0.State}
                    config={{
                        tooltipText:Ldm.Location0.Zip,
                        viewport: {
                            "area": "continent_na"  },
                        points: {
                            groupNearbyPoints: true,
                            minSize: "0.5x",
                            maxSize: "1.5x"
                        },
                        mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg"
                    }}
                />
            </div>
            <h1>Location + Size + Color</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    location={Ldm.Location0.LatlonName}
                    size={Ldm.PopulationSum}
                    color={Ldm.PopulationMin}
                    config={{
                        tooltipText:Ldm.Location0.LatlonName,
                        points: {
                            groupNearbyPoints: true,
                            minSize: "1.5x",
                            maxSize: "1.5x"
                        },
                        mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg",
                        legend: {
                            enabled: true, 
                            position: "right", 
                  },
                  viewport: {
                    "area": "world"  }}}
                />
            </div>
            <h1>Location + Size + Color + Segment By</h1>
            <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                <GeoPushpinChart
                    location={Ldm.Location0.LatlonName}
                    size={Ldm.PopulationSum}
                    color={Ldm.PopulationMin}
                    segmentBy={Ldm.Location0.State}
                    config={{
                        tooltipText:Ldm.Location0.City,
                        points: {
                            groupNearbyPoints: true,
                            minSize: "1.5x",
                            maxSize: "1.5x"
                        },
                        mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg",
                        legend: {
                            enabled: true, 
                            position: "left", 
                  },
                  viewport: {
                            "area": "continent_eu"  },
                            // colorMapping: [
                            //     {
                            //         predicate: (headerItem) =>
                            //             headerItem.attributeHeaderItem &&
                            //             headerItem.attributeHeaderItem
                            //                 .name === "NH",
                            //         color: {
                            //             type: "guid",
                            //             value: "4",
                            //         },
                            //     },
                            // ]
                    }}
                />
            </div>
                </WorkspaceProvider>  
                </BackendProvider>
                </div>
         ))
         .add('Special cases', () => (
            <div style={WRAPPER_STYLE}>
            <BackendProvider backend={backend}>
            <WorkspaceProvider workspace={workspace}>
                {/* <h1>Missing Location</h1>
                <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                    <GeoPushpinChart
                        size={Ldm.PopulationSum}
                        color={Ldm.PopulationMin}
                        segmentBy={Ldm.Location0.Timezone}
                        filters={[LdmExt.filterCity]}
                        config={{ points: {
                            groupNearbyPoints: true,
                            minSize: "0.5x",
                            maxSize: "1.5x"
                        },
                        mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                    />
                </div> */}
                <h1>Too large insight but can’t render</h1>
                <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                    <GeoPushpinChart
                        location={Ldm.g_Latlon1}
                        config={{points: {
                            groupNearbyPoints: true,
                            minSize: "0.5x",
                            maxSize: "1.5x"
                        }, mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                    />
                </div>
                <h1>No data</h1>
                <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                    <GeoPushpinChart
                        location={Ldm.Location0.LatlonName}
                        size={Ldm.PopulationSum}
                        color={Ldm.PopulationMin}
                        segmentBy={Ldm.Location0.State}
                        filters={[LdmExt.filterMinPopulation_EqualTo]}
                        config={{points: {
                            groupNearbyPoints: true,
                            minSize: "0.5x",
                            maxSize: "1.5x"
                        }, mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                    />
                </div>
                <h1>Invalid data</h1>
                <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                    <GeoPushpinChart
                        location={Ldm.Location0.LatlonName}
                        size={Ldm.PopulationSum}
                        color={Ldm.PopulationMin}
                        segmentBy={LdmExt.a_StageName}
                        config={{ points: {
                            groupNearbyPoints: true,
                            minSize: "0.5x",
                            maxSize: "1.5x"
                        },mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                    />
                </div>
                <h1>Protected attribute</h1> //Protected attribute: DST
                <div style={{ position: "relative", height: 600, border: "solid 2px black"}}>
                    <GeoPushpinChart
                        location={Ldm.Location0.LatlonName}
                        size={Ldm.PopulationSum}
                        color={Ldm.PopulationMin}
                        segmentBy={Ldm.Location0.DST}
                        config={{ points: {
                            groupNearbyPoints: true,
                            minSize: "0.5x",
                            maxSize: "1.5x"
                        },mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                    />
                </div>
                {/* <h1>Many measures, attributes on Size/Color/Location/Segment By</h1>
                <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                    <GeoPushpinChart
                        location={Ldm.Location0.LatlonName}
                        size={Ldm.PopulationSum, Ldm.PopulationMin}
                        color={Ldm.PopulationMin}
                        config={{ points: {
                            groupNearbyPoints: true,
                            minSize: "0.5x",
                            maxSize: "1.5x"
                        },mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                    />
                </div> */}
                </WorkspaceProvider>  
                </BackendProvider>
            </div>
        ))
        .add('Apply measure format', () => (
            <div style={WRAPPER_STYLE}>
                <h1>Ratio</h1>
                <BackendProvider backend={backend}>
                <WorkspaceProvider workspace={workspace}>
                <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                    <GeoPushpinChart
                        location={Ldm.Location0.LatlonName}
                        size={Ldm.PopulationSum}
                        color={LdmExt.m_SumPopulationRatio}
                        segmentBy={Ldm.Location0.State}
                        config={{ points: {
                            groupNearbyPoints: true,
                            minSize: "0.5x",
                            maxSize: "1.5x"
                        }, mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                        // drillableItems={[
                        //     HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/77084`)
                        // ]}
                        // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext);}}
                    />
                </div>
                <h1>Derive measure - POP</h1>
                <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                    <GeoPushpinChart
                        location={Ldm.Location0.LatlonName}
                        size={Ldm.PopulationSum}
                        color={LdmExt.m_POP_SumPopulation}
                        segmentBy={Ldm.a_YearSnapshot}
                        filters={[LdmExt.filterabsoluteYearSnapshot]}
                        config={{points: {
                            groupNearbyPoints: true,
                            minSize: "0.5x",
                            maxSize: "1.5x"
                        },  mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                        // drillableItems={[
                        //     HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/514`)
                        // ]}
                        // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext);}}
                    />
                </div>
                <h1>Derive measure - PP</h1>
                <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                    <GeoPushpinChart
                        location={Ldm.Location0.LatlonName}
                        size={Ldm.PopulationSum}
                        color={LdmExt.m_PP_SumPopulation}
                        segmentBy={Ldm.a_YearSnapshot}
                        filters={[LdmExt.filterabsoluteYearSnapshot]}
                        config={{points: {
                            groupNearbyPoints: true,
                            minSize: "0.5x",
                            maxSize: "1.5x"
                        },  mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                    />
                </div>
                </WorkspaceProvider>  
                </BackendProvider>
            </div>
        ))
        .add('Filter', () => (
            <div style={WRAPPER_STYLE}>
                <h1>Static filter inside measures - less than or = 50 </h1>
                <BackendProvider backend={backend}>
                <WorkspaceProvider workspace={workspace}>
                <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                    <GeoPushpinChart
                        location={Ldm.Location0.LatlonName}
                        size={Ldm.PopulationSum}
                        color={Ldm.PopulationMin}
                        segmentBy={Ldm.Location0.City}
                        filters={[LdmExt.filterSumPopulation_LessThanOrEqualTo]}
                        config=
                        {{
                            points: {
                                groupNearbyPoints: true,
                                minSize: "0.5x",
                                maxSize: "1.5x"
                            },  mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg"
                        }}
                    />
                </div>
                <h1>Static filter inside measures - between 0 -50</h1>
                <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                    <GeoPushpinChart
                        location={Ldm.Location0.LatlonName}
                        size={Ldm.PopulationSum}
                        color={Ldm.PopulationMin}
                        segmentBy={Ldm.Location0.City}
                        filters={[LdmExt.filterSumPopulation_Between]}
                        config=
                        {{
                            points: {
                                groupNearbyPoints: true,
                                minSize: "0.5x",
                                maxSize: "1.5x"
                            }, mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg"
                        }}
                    />
                </div>
                <h1>Static filter inside measures - equal 6</h1>
                <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                    <GeoPushpinChart
                        location={Ldm.Location0.LatlonName}
                        size={Ldm.PopulationSum}
                        color={Ldm.PopulationMin}
                        segmentBy={Ldm.Location0.City}
                        filters={[LdmExt.filterSumPopulation_Equal]}
                        config=
                        {{
                            points: {
                                groupNearbyPoints: true,
                                minSize: "0.5x",
                                maxSize: "1.5x"
                            },  mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg"
                        }}
                    />
                </div>
                <h1>Global filter by attribute</h1>
                <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                    <GeoPushpinChart
                        location={Ldm.Location0.LatlonName}
                        size={Ldm.PopulationSum}
                        color={Ldm.PopulationMin}
                        segmentBy={Ldm.Location0.City}
                        filters={[LdmExt.filterCity]}
                        config=
                        {{
                            points: {
                                groupNearbyPoints: true,
                                minSize: "0.5x",
                                maxSize: "1.5x"
                            }, mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg"
                        }}
                    />
                </div>
                <h1>Global filter negative attribute</h1>
                <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                    <GeoPushpinChart
                        location={Ldm.Location0.LatlonName}
                        size={Ldm.PopulationSum}
                        color={Ldm.PopulationMin}
                        segmentBy={Ldm.Location0.DST}
                        filters={[LdmExt.filterDSTNegative]}
                        config=
                        {{
                            points: {
                                groupNearbyPoints: true,
                                minSize: "0.5x",
                                maxSize: "1.5x"
                            }, mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg"
                        }}
                    />
                </div>
                <h1>Global filter by absolute date</h1>
                <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                    <GeoPushpinChart
                        location={Ldm.Location0.LatlonName}
                        size={Ldm.PopulationSum}
                        color={Ldm.PopulationMin}
                        segmentBy={Ldm.Location0.City}
                        filters={[LdmExt.filterabsoluteYearSnapshot]}
                        config=
                        {{
                            points: {
                                groupNearbyPoints: true,
                                minSize: "0.5x",
                                maxSize: "1.5x"
                            },  mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg"
                        }}
                    />
                </div>
                <h1>Global filter by relative date</h1>
                <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                    <GeoPushpinChart
                        location={Ldm.Location0.LatlonName}
                        size={Ldm.PopulationSum}
                        color={Ldm.PopulationMin}
                        segmentBy={Ldm.Location0.City}
                        filters={[LdmExt.filterrelativeYearSnapshot]}
                        config=
                        {{
                            points: {
                                groupNearbyPoints: true,
                                minSize: "0.5x",
                                maxSize: "1.5x"
                            },  mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg"
                        }}
                    />
                </div>
                <h1>Global filter by attribute + date</h1>
                <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                    <GeoPushpinChart
                        location={Ldm.Location0.LatlonName}
                        size={Ldm.PopulationSum}
                        color={Ldm.PopulationMin}
                        segmentBy={Ldm.Location0.City}
                        filters={[LdmExt.filterCity, LdmExt.filterabsoluteYearSnapshot]}
                        config=
                        {{
                            points: {
                                groupNearbyPoints: true,
                                minSize: "0.5x",
                                maxSize: "1.5x"
                            },  mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg"
                        }}
                    />
                </div>
                <h1>both static and global filters</h1>
                <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                    <GeoPushpinChart
                        location={Ldm.Location0.LatlonName}
                        size={Ldm.PopulationSum}
                        color={Ldm.PopulationMin}
                        segmentBy={Ldm.Location0.City}
                        filters={[LdmExt.filterCity,LdmExt.filterSumPopulation_LessThanOrEqualTo]}
                        config=
                        {{
                            points: {
                                groupNearbyPoints: true,
                                minSize: "0.5x",
                                maxSize: "1.5x"
                            },  mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg"
                        }}
                        // drillableItems={[
                        //     HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/77082`)
                        // ]}
                        // onFiredDrillEvent={(data) => {console.log(data.executionContext); console.log(data.drillContext);}}
                    />
                </div>
                </WorkspaceProvider>  
                </BackendProvider>
            </div>
        ))
        // .add('Drill', () => (
        //     <div style={WRAPPER_STYLE}>
        //         <h1>Drill into measure size/color</h1>
        //         <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
        //             <GeoPushpinChart
        //                 projectId={Ldm.projectId}
        //                 location={Ldm.Location0.LatlonName}
        //                 size={Ldm.PopulationSum}
        //                 color={Ldm.PopulationMin}
        //                 segmentBy={Ldm.Location0.State}
        //                 drillableItems={[
        //                     //HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/77185`),
        //                     HeaderPredicateFactory.localinsightMatch(`SumPopulation`)
        //                 ]}
        //                 onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
        //                 config={{ mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
        //             />
        //         </div>
        //         <h1>Drill into Location/Segment By</h1>
        //         <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
        //             <GeoPushpinChart
        //                 projectId={Ldm.projectId}
        //                 location={Ldm.Location0.LatlonName}
        //                 size={Ldm.PopulationSum}
        //                 color={Ldm.PopulationMin}
        //                 segmentBy={Ldm.Location0.State}
        //                 drillableItems={[
        //                     HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/77094`)
        //                 ]}
        //                 onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext); }}
        //                 config={{ mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
        //             />
        //         </div>
        //     </div>
        // ))
        .add('Export', () => (
            <div style={WRAPPER_STYLE}>
                <BackendProvider backend={backend}>
<WorkspaceProvider workspace={workspace}>
                {/* <h1>Export geo pushpin to csv</h1>
                <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                    <GeoPushpinChart
                        location={Ldm.Location0.LatlonName}
                        size={Ldm.PopulationSum}
                        color={Ldm.PopulationMin}
                        segmentBy={Ldm.Location0.State}
                        config={{ points: {
                            groupNearbyPoints: true,
                            minSize: "0.5x",
                            maxSize: "1.5x"
                        },mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                        onExportReady={onExportReady}
                    />
                    <button  style={{position:"relative", padding: "15px 32px" }} onClick={doExport}>Export</button>
                </div>
                <h1>Export to xlsx</h1>
                <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                    <GeoPushpinChart
                        location={Ldm.Location0.LatlonName}
                        size={Ldm.PopulationSum}
                        color={Ldm.PopulationMin}
                        segmentBy={Ldm.Location0.City}
                        filters={[LdmExt.filterCity, LdmExt.filterabsoluteYearSnapshot]}
                        config={{ points: {
                            groupNearbyPoints: true,
                            minSize: "0.5x",
                            maxSize: "1.5x"
                        },mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                        onExportReady={onExportReady}
                    />
                    <button onClick={doExport}>Export</button>
                </div> */}
                <h1>Export to xlsx</h1>
                <p>Missing 1 or more buckets</p>
                <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                    <GeoPushpinChart
                        location={Ldm.Location0.LatlonName}
                        size={Ldm.PopulationSum}
                        color={Ldm.PopulationMin}
                        segmentBy={Ldm.Location0.City}
                        filters={[LdmExt.filterCity, LdmExt.filterabsoluteYearSnapshot]}
                        config={{ 
                            zoom:1,
                            center: { lat: 40.922326, lng: -72.637078 },
                            points: {
                            groupNearbyPoints: true,
                            minSize: "0.5x",
                            maxSize: "1.5x"
                        },mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                        // onExportReady={onExportReady}
                    />
                </div>
                {/* <button style={{ padding: "15px 32px" }} onClick={doExport}>Export</button> */}
                </WorkspaceProvider>  
                </BackendProvider>
            </div>
        ))
        .add('Element Masking', () => (
            <div style={WRAPPER_STYLE}>
                <h1>Element Masking</h1>
                <BackendProvider backend={backend}>
<WorkspaceProvider workspace={workspace}>
                <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                    <GeoPushpinChart
                        location={Ldm.Location0.LatlonName}
                        size={Ldm.PopulationSum}
                        color={Ldm.PopulationMin}
                        segmentBy={Ldm.Location0.Zip}
                        config={{ points: {
                            groupNearbyPoints: true,
                            minSize: "0.5x",
                            maxSize: "1.5x"
                        },
                        mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                        // drillableItems={[
                        //     HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/77080`)
                        // ]}
                        // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext);}}
                    />
                </div>
                </WorkspaceProvider>  
                </BackendProvider>
            </div>
        ))
        .add('Localization', () => (
            <div style={WRAPPER_STYLE}>
                <h1>Localization: fr-FR</h1>
                <BackendProvider backend={backend}>
                <WorkspaceProvider workspace={workspace}>
                <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                    <GeoPushpinChart
                        location={Ldm.Location0.LatlonName}
                        size={Ldm.PopulationSum}
                        color={Ldm.PopulationMin}
                        segmentBy={Ldm.a_StageName}
                        locale="fr-FR"
                    />
                </div>
                </WorkspaceProvider>  
                </BackendProvider>
            </div>
        ))
        .add('Visualizaton', () => (
            <div style={WRAPPER_STYLE}>
                <h1>No location</h1>
                <BackendProvider backend={backend}>
                <WorkspaceProvider workspace={workspace}>
                <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                    <InsightView
                        insight={Ldm.Insights.GeoChart1}
                        config={{ mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                    />
                </div>
                <h1>Only Location</h1>
                <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                    <InsightView
                        insight={Ldm.Insights.GeoChart1}
                        config={{
                            mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg",
                        }}
                    />
                </div>
                <h1>Location + size</h1>
                <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                    <InsightView
                        insight={Ldm.Insights.GeoChart2}
                        config={{
                            mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg",
                            tooltipText: Ldm.Location0.State
                        }}
                    />
                </div>
                <h1>Location + color</h1>
                <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                    <InsightView
                        insight={Ldm.Insights.GeoChart3}
                        config={{ tooltipText: Ldm.Location0.State,
                            mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                    />
                </div>
                <h1>Location + size + segment</h1>
                <div style={{ position: "relative", height: 1600, border: "solid 2px black" }}>
                    <InsightView
                        insight={Ldm.Insights.GeoChart4}
                        config={{ 
                            tooltipText: Ldm.Location0.State,
                            mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
    
                    />
                </div>
                <h1>Location + color + segment</h1>
                <div style={{ position: "relative", height: 1600, border: "solid 2px black" }}>
                    <InsightView
                        insight={Ldm.Insights.GeoChart5}
                        config={{ 
                            tooltipText: Ldm.Location0.State,
                            mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
    
                    />
                </div>
                <h1>Location + size + color</h1>
                <div style={{ position: "relative", height: 1600, border: "solid 2px black" }}>
                    <InsightView
                        insight={Ldm.Insights.GeoChart6}
                        config={{ 
                            tooltipText: Ldm.Location0.State,
                            mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                    />
                </div>
                <h1>Location + size + color + segment</h1>
                <div style={{ position: "relative", height: 1600, border: "solid 2px black" }}>
                    <InsightView
                        insight={Ldm.Insights.GeoChart7}
                        config={{
                            tooltipText: Ldm.Location0.State,
                            mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg"
                        }}
                    />
                </div>
                <h1>Filter inside measure</h1>
                <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                    <InsightView
                        insight={Ldm.Insights.GeoChart7}
                        // filters={[
                        //     {
                        //         "measureValueFilter": {
                        //             "condition": {
                        //                 "comparison": {
                        //                     "operator": "LESS_THAN_OR_EQUAL_TO",
                        //                     "value": 50
                        //                 }
                        //             },
                        //             "measure": {
                        //                 "localinsight": "e2ca72bcfbf542fbb427e76b45b4ebbc"
                        //             }
                        //         }
                        //     }
                        // ]}
                        config={{ mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                    />
                </div>
                <h1>Filter attribute + date</h1>
                <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                    <InsightView
                        insight={Ldm.Insights.GeoChart7}
                        // filters={[
                        //     {
                        //         "positiveAttributeFilter": {
                        //             "displayForm": {
                        //                 "uri": "/gdc/md/qxcxp768fpuythmmt28va9p6oz0y9c41/obj/77084"
                        //             },
                        //             "in": ["/gdc/md/qxcxp768fpuythmmt28va9p6oz0y9c41/obj/77083/elements?id=316"
                        //             ]
                        //         }
                        //     }
                        // ]}
                        config={{ mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
    
                    />
                </div>
                <h1>Drill metric SumPopulation</h1>
                <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                    <InsightView
                        insight={Ldm.Insights.GeoChart7}
                        // drillableItems={[
                        //     HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/77185`)
                        // ]}
                        // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext);}}
                        config={{ mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
    
                    />
                </div>
                <h1>Drill attribute State</h1>
                <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                    <InsightView
                        insight={Ldm.Insights.GeoChart7}
                        // drillableItems={[
                        //     HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/77084`)
                        // ]}
                        // onFiredDrillEvent={(data) => { console.log(data.executionContext); console.log(data.drillContext);}}
                        //config={{ mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
    
                    />
                </div>
                <h1>Localization</h1>
                <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                    <InsightView
                        insight={Ldm.Insights.GeoChart8}
                        locale="fr-FR"
                        //config={{ mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
    
                    />
                </div>
                <h1>Export</h1>
                <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                    <InsightView
                        insight={Ldm.Insights.GeoChart7}
                        config={{ mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                        // onExportReady={onExportReady}
                    />
                    {/* <button style={{ position: "relative", padding: "15px 32px" }} onClick={doExport}>Export</button> */}
                </div>
                </WorkspaceProvider>  
                </BackendProvider>
            </div>
        ))
        .add('Combine case 1', () => (
            <div style={WRAPPER_STYLE}>
                <h1>Ratio + format metric + filter, zoom minimum</h1>
                <BackendProvider backend={backend}>
<WorkspaceProvider workspace={workspace}>
                <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                    <GeoPushpinChart
                        location={Ldm.Location0.LatlonName}
                        size={LdmExt.m_SumPopulationRatio}
                        color={LdmExt.m_MinPopulationRatio}
                        segmentBy={Ldm.Location0.State}
                        config={{points: {
                            groupNearbyPoints: false,
                            minSize: "0.5x",
                            maxSize: "1.5x"
                        },
                            zoom: 7,
                            center: { lat: 40.922326, lng: -72.637078 },
                            mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg"
                        }}
                        filters={[LdmExt.filterCity1Value]}
                        // onExportReady={onExportReady}
                        // drillableItems={[
                        //     HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/77084`)
                        // ]}
                        // onFiredDrillEvent={(data) => {console.log(data.executionContext); console.log(data.drillContext);}}
                    />
                    {/* <button style={{ position: "relative", padding: "15px 32px" }} onClick={doExport}>Export</button> */}
                </div>
                </WorkspaceProvider>  
                </BackendProvider>
            </div>
        ))
        .add('Combine case 2', () => (
            <div style={WRAPPER_STYLE}>
                <h1>POP + format metric + filter</h1>
                <BackendProvider backend={backend}>
<WorkspaceProvider workspace={workspace}>
                <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                    <GeoPushpinChart
                        location={Ldm.Location0.LatlonName}
                        size={Ldm.PopulationSum}
                        color={LdmExt.m_PP_SumPopulation}
                        segmentBy={Ldm.Location0.State}
                        config={{ points: {
                            groupNearbyPoints: false,
                            minSize: "0.5x",
                            maxSize: "1.5x"
                        },mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                        filters={[LdmExt.filterCity1Value]}
                        // onExportReady={onExportReady}
                        // drillableItems={[
                        //     HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/77084`)
                        // ]}
                        // onFiredDrillEvent={(data) => {console.log(data.executionContext); console.log(data.drillContext);}}
                    />
                    {/* <button style={{ position: "relative", padding: "15px 32px" }} onClick={doExport}>Export</button> */}
                </div>
                </WorkspaceProvider>  
                </BackendProvider>
            </div>
        ))
        .add('Combine case 3', () => (
            <div style={WRAPPER_STYLE}>
                <h1>AM sum + format metric + filter, zoom maximum</h1>
                <BackendProvider backend={backend}>
<WorkspaceProvider workspace={workspace}>
                <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                    <GeoPushpinChart
                        location={Ldm.Location0.LatlonName}
                        size={Ldm.PopulationSum}
                        color={LdmExt.m_Sum_SumPopulation}
                        segmentBy={Ldm.Location0.State}
                        config={{points: {
                            groupNearbyPoints: false,
                            minSize: "0.5x",
                            maxSize: "1.5x"
                        },
                            zoom: 14,
                            center: { lat: 40.922326, lng: -72.637078 },
                            mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg"
                        }}
                        filters={[LdmExt.filterCity]}
                        // onExportReady={onExportReady}
                        // drillableItems={[
                        //     HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/77084`)
                        // ]}
                        // onFiredDrillEvent={(data) => {console.log(data.executionContext); console.log(data.drillContext);}}
                    />
                    {/* <button style={{ position: "relative", padding: "15px 32px" }} onClick={doExport}>Export</button> */}
                </div>
                <h1>AM dif + format metric + filter</h1>
                <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                    <GeoPushpinChart
                        location={Ldm.Location0.LatlonName}
                        size={Ldm.PopulationSum}
                        color={LdmExt.m_Difference_SumPopulation}
                        segmentBy={Ldm.Location0.City}
                        config={{ points: {
                            groupNearbyPoints: false,
                            minSize: "0.5x",
                            maxSize: "1.5x"
                        },mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                        filters={[LdmExt.filterCity1Value]}
                        // onExportReady={onExportReady}
                        // drillableItems={[
                        //     HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/77084`)
                        // ]}
                        // onFiredDrillEvent={(data) => {console.log(data.executionContext); console.log(data.drillContext);}}
                    />
                    {/* <button style={{ position: "relative", padding: "15px 32px" }} onClick={doExport}>Export</button> */}
                </div>
                <h1>AM ratio + format metric + filter</h1>
                <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                    <GeoPushpinChart
                        location={Ldm.Location0.LatlonName}
                        size={Ldm.PopulationSum}
                        color={LdmExt.m_Ratio_SumPopulation}
                        segmentBy={Ldm.Location0.City}
                        config={{points: {
                            groupNearbyPoints: false,
                            minSize: "0.5x",
                            maxSize: "1.5x"
                        }, mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                        filters={[LdmExt.filterCity1Value]}
                        // onExportReady={onExportReady}
                        // drillableItems={[
                        //     HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/77084`)
                        // ]}
                        // onFiredDrillEvent={(data) => {console.log(data.executionContext); console.log(data.drillContext);}}
                    />
                    {/* <button style={{ position: "relative", padding: "15px 32px" }} onClick={doExport}>Export</button> */}
                </div>
                <h1>AM change + format metric + filter</h1>
                <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                    <GeoPushpinChart
                        location={Ldm.Location0.LatlonName}
                        size={Ldm.PopulationSum}
                        color={LdmExt.m_Change_SumPopulation}
                        segmentBy={Ldm.Location0.City}
                        config={{ points: {
                            groupNearbyPoints: false,
                            minSize: "0.5x",
                            maxSize: "1.5x"
                        },mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                        filters={[LdmExt.filterCity1Value]}
                        // onExportReady={onExportReady}
                        // drillableItems={[
                        //     HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/77084`)
                        // ]}
                        // onFiredDrillEvent={(data) => {console.log(data.executionContext); console.log(data.drillContext);}}
                    />
                    {/* <button style={{ position: "relative", padding: "15px 32px" }} onClick={doExport}>Export</button> */}
                </div>
                <h1>AM multiplication + format metric + filter</h1>
                <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                    <GeoPushpinChart
                        location={Ldm.Location0.LatlonName}
                        size={Ldm.PopulationSum}
                        color={LdmExt.m_Multiplication_SumPopulation}
                        segmentBy={Ldm.Location0.City}
                        config={{ points: {
                            groupNearbyPoints: false,
                            minSize: "0.5x",
                            maxSize: "1.5x"
                        },mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                        filters={[LdmExt.filterCity1Value]}
                        // onExportReady={onExportReady}
                        // drillableItems={[
                        //     HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/77084`)
                        // ]}
                        // onFiredDrillEvent={(data) => {console.log(data.executionContext); console.log(data.drillContext);}}
                    />
                    {/* <button style={{ position: "relative", padding: "15px 32px" }} onClick={doExport}>Export</button> */}
                </div>
                </WorkspaceProvider>  
                </BackendProvider>
            </div>
        ))
        .add('Combine case 4', () => (
            <div style={WRAPPER_STYLE}>
                <h1>Element masking + format metric + filter</h1>
                <BackendProvider backend={backend}>
                <WorkspaceProvider workspace={workspace}>
                <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                    <GeoPushpinChart
                        location={Ldm.Location0.LatlonName}
                        size={Ldm.PopulationSum}
                        color={Ldm.PopulationMin}
                        segmentBy={Ldm.Location0.Zip}
                        config={{points: {
                            groupNearbyPoints: false,
                            minSize: "0.5x",
                            maxSize: "1.5x"
                        },
                         mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg" }}
                        filters={[LdmExt.filterCity1Value]}
                        // onExportReady={onExportReady}
                        // drillableItems={[
                        //     HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/77080`)
                        // ]}
                        // onFiredDrillEvent={(data) => {console.log(data.executionContext); console.log(data.drillContext);}}
                    />
                    {/* <button style={{ position: "relative", padding: "15px 32px" }} onClick={doExport}>Export</button> */}
                </div>
                </WorkspaceProvider>  
                </BackendProvider>
            </div>
        ))
        .add('Combine case 5', () => (
            <div style={WRAPPER_STYLE}>
                <h1>config zoom, center, mdObject</h1>
                <BackendProvider backend={backend}>
                <WorkspaceProvider workspace={workspace}>
                <div style={{ position: "relative", height: 600, border: "solid 2px black" }}>
                    <GeoPushpinChart
                        location={Ldm.Location0.LatlonName}
                        size={Ldm.PopulationSum}
                        color={Ldm.PopulationMin}
                        segmentBy={Ldm.Location0.State}
                        config={{
                            points: {
                                groupNearbyPoints: false,
                                minSize: "0.5x",
                                maxSize: "1.5x"
                            },
                            tooltipText: Ldm.Location0.City,
                            zoom: 1,
                            center: { lat: 40.922326, lng: -72.637078 },
                            mapboxToken: "pk.eyJ1IjoiaW1udXR6IiwiYSI6ImNrMHAxY2UxZzBnc2EzZG11YmVhd2dubG0ifQ.bUTN7ceAHq6kVooe3MKgqg"
                        }}
                        //filters={[LdmExt.filterCity]}
                        // onExportReady={onExportReady}
                        // drillableItems={[
                        //     HeaderPredicateFactory.uriMatch(`/gdc/md/${Ldm.projectId}/obj/77084`)
    
                        // ]}
                        // onFiredDrillEvent={(data) => {console.log(data.executionContext); console.log(data.drillContext);}}
                    />
                    {/* <button style={{ position: "relative", padding: "15px 32px" }} onClick={doExport}>Export</button> */}
                </div>
                </WorkspaceProvider>  
                </BackendProvider>
            </div>
        ))