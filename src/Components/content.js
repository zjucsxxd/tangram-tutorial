import { Tutorial1 } from './Tutorial/Tutorial1Intro.react';
import { Tutorial21, Tutorial22 } from './Tutorial/Tutorial2Min.react';
import { Tutorial31, Tutorial32, Tutorial33, Tutorial34, Tutorial35 } from './Tutorial/Tutorial3Styling.react';
import { Tutorial41, Tutorial42, Tutorial43 } from './Tutorial/Tutorial4Filters.react';
import { Tutorial51, Tutorial52, Tutorial53, Tutorial54, Tutorial55, Tutorial56, Tutorial57, Tutorial58, Tutorial59 } from './Tutorial/Tutorial5Vector.react';
import { Tutorial61 } from './Tutorial/Tutorial6Raster.react';
import { TutorialConclusion } from './Tutorial/TutorialConclusion.react';

// As long as this array is in order, the next and before buttons will populate correctly
let content = [
    {
        title: 'Introduction',
        sections: [
            { path: '/intro', component: Tutorial1, name: 'Introduction' }
        ]
    },
    {
        title: 'A Basic Map',
        sections: [
            { path: '/minimum-map/min', component: Tutorial21, name: 'A Basic Map'},
            { path: '/minimum-map/data', component: Tutorial22, name: 'Layers and Data Import'}
        ]
    },
    {
        title: 'Styling',
        sections: [
            { path: '/styling/lines', component: Tutorial31, name: 'Styling with Lines' },
            { path: '/styling/order', component: Tutorial32, name: 'Layer Order' },
            { path: '/styling/colors', component: Tutorial33, name: 'Colors' },
            { path: '/styling/labels', component: Tutorial34, name: 'Text Labels'},
            { path: '/styling/text', component: Tutorial35, name: 'Customizing Text'}
        ]
    },
    {
        title: 'Data Filters',
        sections: [
            { path: '/filters/features', component: Tutorial41, name: 'Feature Filters'},
            { path: '/filters/booleans', component: Tutorial42, name: 'Boolean Filters'},
            { path: '/filters/functions', component: Tutorial43, name: 'Function Filters'}
        ]
    },
    {
        title: 'Vector Tiles',
        sections: [
            { path: '/tiles/vector', component: Tutorial51, name: 'What are Vector Tiles?' },
            { path: '/tiles/landuse', component: Tutorial52, name: 'Landuse Layer'},
            { path: '/tiles/buildings', component: Tutorial53, name: 'Buildings Layer'},
            { path: '/tiles/roads', component: Tutorial54, name: 'Roads Layer'},
            { path: '/tiles/sublayers', component: Tutorial55, name: 'Sublayers'},
            { path: '/tiles/layerorder', component: Tutorial56, name: 'Tip: Layer Order'},
            { path: '/tiles/shorthand', component: Tutorial57, name: 'Tip: Syntax Shorthands'},
            { path: '/tiles/places', component: Tutorial58, name: 'Labels and Places Layer'},
            { path: '/tiles/syntax', component: Tutorial59, name: 'URL Syntax'}
        ]
    },
    {
        title: 'Raster Tiles',
        sections: [
            { path: '/tiles/raster', component: Tutorial61, name: 'Raster Tiles'}
        ]
    },
    {
        title: 'Conclusion',
        sections: [
            { path: '/conclusion', component: TutorialConclusion, name: 'Conclusion'}
        ]
    }
];

// Function to populate our content array with next and previous links
let populateLinks = function () {
    for (let i = 0; i < content.length; i++) {
        for (let j = 0; j < content[i].sections.length; j++) {
            /* NEXT LINKS */
            let next;

            // We are at the end of whole content array
            if ((j + 1) === content[i].sections.length && (i + 1) === content.length) {
                next = '';
            }
            // If we are at the end of a section
            else if ((j + 1) === content[i].sections.length) {
                next = content[(i + 1)].sections[0].path;
            }
            else {
                next = content[i].sections[(j + 1)].path;
            }

            content[i].sections[j].next = next;

            /* PREV LINKS */
            let prev;

            // Beginning of whole content array
            if (i === 0 && j === 0) {
                prev = '';
            }
            // Beginning of a section
            else if (j === 0) {
                let prevSec = content[(i - 1)].sections;
                prev = prevSec[prevSec.length - 1].path;
            }
            else {
                prev = content[i].sections[(j - 1)].path;
            }

            content[i].sections[j].prev = prev;
        }
    }
};

populateLinks();

export default content;