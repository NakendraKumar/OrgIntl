import { Component, OnInit } from '@angular/core';
//import * as d3 from 'd3';

declare var d3: any;

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  data: any = {
    name: 'Root_Level',
    value: 75,
    type: 'black',
    level: 'red',
    male: 51,
    female: 24,
    children: [
      {
        name: 'Operation',
        value: 40,
        type: 'black',
        level: 'green',
        male: 23,
        female: 17,
        children: [
          {
            name: 'Top Management',
            value: 3,
            type: 'grey',
            level: 'red',
            male: 3,
            female: 0,
            children: [
              {
                name: 'Operation Manager',
                value: 1,
                type: 'steelblue',
                level: 'orange',
                male: 1,
                female: 0
              },
              {
                name: 'Account Strategist',
                value: 1,
                type: 'steelblue',
                level: 'red',
                male: 1,
                female: 0
              },
              {
                name: 'Product Management Executive',
                value: 1,
                type: 'steelblue',
                level: 'red',
                male: 1,
                female: 0
              }
            ]
          },
          {
            name: 'Junior Level',
            value: 23,
            type: 'grey',
            level: 'green',
            male: 10,
            female: 13,
            children: [
              {
                name: 'Analyst',
                value: 10,
                type: 'steelblue',
                level: 'orange',
                male: 7,
                female: 3
              },
              {
                name: 'Intern',
                value: 5,
                type: 'steelblue',
                level: 'red',
                male: 0,
                female: 5
              },
              {
                name: 'Research Associate',
                value: 1,
                type: 'steelblue',
                level: 'red',
                male: 0,
                female: 1
              },
              {
                name: 'Search Marketing Analyst',
                value: 1,
                type: 'steelblue',
                level: 'red',
                male: 1,
                female: 0
              },
              {
                name: 'Search Marketing Associate',
                value: 6,
                type: 'steelblue',
                level: 'red',
                male: 2,
                female: 4
              }
            ]
          },
          {
            name: 'Middle Management',
            value: 14,
            type: 'grey',
            level: 'green',
            male: 10,
            female: 4,
            children: [
              {
                name: 'Account Manager',
                value: 1,
                type: 'steelblue',
                level: 'orange',
                male: 1,
                female: 0
              },
              {
                name: 'Account Planner',
                value: 8,
                type: 'steelblue',
                level: 'red',
                male: 6,
                female: 2
              },
              {
                name: 'Senior Analyst',
                value: 5,
                type: 'steelblue',
                level: 'red',
                male: 3,
                female: 2
              }
            ]
          }
        ]
      },
      {
        name: 'Technology',
        value: 32,
        type: 'black',
        level: 'red',
        male: 26,
        female: 6,
        children: [
          {
            name: 'Top Management',
            value: 6,
            type: 'grey',
            level: 'red',
            male: 6,
            female: 0,
            children: [
              {
                name: 'Engineering Manager',
                value: 1,
                type: 'grey',
                level: 'red',
                male: 1,
                female: 0
              },
              {
                name: 'Product Manager',
                value: 1,
                type: 'grey',
                level: 'red',
                male: 1,
                female: 0
              },
              {
                name: 'Associate Product Lead',
                value: 1,
                type: 'grey',
                level: 'red',
                male: 2,
                female: 0
              },
              {
                name: 'Associate Architect',
                value: 1,
                type: 'grey',
                level: 'red',
                male: 1,
                female: 0
              },
              {
                name: 'Principal Consultant',
                value: 1,
                type: 'grey',
                level: 'red',
                male: 1,
                female: 0
              }
            ]
          },
          {
            name: 'Junior Level',
            value: 21,
            type: 'grey',
            level: 'red',
            male: 16,
            female: 5,
            children: [
              {
                name: 'System Administrator',
                value: 1,
                type: 'grey',
                level: 'red',
                male: 1,
                female: 0
              },
              {
                name: 'Support Engineer',
                value: 1,
                type: 'grey',
                level: 'red',
                male: 1,
                female: 0
              },
              {
                name: 'Software Enginner',
                value: 6,
                type: 'grey',
                level: 'red',
                male: 6,
                female: 0
              },
              {
                name: 'Associate Software Enginner',
                value: 13,
                type: 'grey',
                level: 'red',
                male: 8,
                female: 5
              }
            ]
          },
          {
            name: 'Middle Management',
            value: 6,
            type: 'grey',
            level: 'red',
            male: 4,
            female: 1,
            children: [
              {
                name: 'Database Administrator',
                value: 1,
                type: 'grey',
                level: 'red',
                male: 0,
                female: 1
              },
              {
                name: 'Quality Assurance Lead',
                value: 1,
                type: 'grey',
                level: 'red',
                male: 1,
                female: 0
              },
              {
                name: 'Senior Software Engineer',
                value: 2,
                type: 'grey',
                level: 'red',
                male: 2,
                female: 0
              },
              {
                name: 'UX Designer',
                value: 1,
                type: 'grey',
                level: 'red',
                male: 1,
                female: 0
              }
            ]
          }
        ]
      },
      {
        name: 'HR & Admin',
        value: 3,
        type: 'black',
        level: 'red',
        male: 2,
        female: 1,
        children: [
          {
            name: 'Top Management',
            value: 2,
            type: 'black',
            level: 'red',
            male: 2,
            female: 0,
            children: [
              {
                name: 'Director',
                value: 1,
                type: 'black',
                level: 'red',
                male: 1,
                female: 0
              },
              {
                name: 'HR Manager',
                value: 1,
                type: 'black',
                level: 'red',
                male: 1,
                female: 0
              }
            ]
          },
          {
            name: 'Middle Management',
            value: 1,
            type: 'black',
            level: 'red',
            male: 0,
            female: 1,
            children: [
              {
                name: 'Front Office Executive',
                value: 1,
                type: 'black',
                level: 'red',
                male: 0,
                female: 1
              }
            ]
          }
        ]
      }
    ]
  };
  // width: any = 1000;
  // height: any = 1000;

  // i: any = 0;

  // root: any;
  // transform = d3.zoomIdentity;
  // node: any;
  // link: any;

  // svg: any;

  // simulation: any;
  // i: any = 0;
  duration: any = 750;
  root: any;
  widthScale: any;
  colorScale: Function;
  margin = { top: 20, right: 90, bottom: 30, left: 90 };
  width = 960 - this.margin.left - this.margin.right;
  height = 500 - this.margin.top - this.margin.bottom;
  svg: any;
  treemap: any;

  constructor() {}
  ngOnInit() {
    console.log('inside init');
    this.colorScale = d3
      .scaleLinear()
      .domain([0, 1])
      .range(['red', 'green']);

    console.log(' this.colorScale', this.colorScale);
    this.widthScale = d3
      .scaleLinear()
      .domain([1, 80])
      .range([1, 10]);

    // append the svg object to the body of the page
    // appends a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    this.svg = d3
      .select('#graph')
      .append('svg')
      .attr('width', this.width + this.margin.right + this.margin.left)
      .attr('height', this.height + this.margin.top + this.margin.bottom)
      .append('g')
      .attr(
        'transform',
        'translate(' + this.margin.left + ',' + this.margin.top + ')'
      );

    // declares a tree layout and assigns the size
    this.treemap = d3.tree().size([this.height, this.width]);

    // Assigns parent, children, height, depth
    this.root = d3.hierarchy(this.data, function(d: any) {
      return d.children;
    });
    this.root.x0 = this.height / 2;
    this.root.y0 = 0;

    // Collapse after the second level
    this.root.children.forEach(this.collapse);

    this.update(this.root);
  }
  // this.root = d3.hierarchy(this.data);
  // this.svg = d3
  //   .select('#graph')
  //   .append('svg:svg')
  //   .style('width', this.width + 'px')
  //   .style('height', this.height / 2 + 'px')
  //   .call(
  //     d3
  //       .zoom()
  //       .scaleExtent([1 / 2, 8])
  //       .on('zoom', () => this.zoomed())
  //   )
  //   .append('g')
  //   .attr('transform', 'translate(40,0)');

  // this.simulation = d3
  //   .forceSimulation()
  //   .force(
  //     'link',
  //     d3.forceLink().id(function(d: any) {
  //       return d.id;
  //     })
  //   )
  //   .force(
  //     'charge',
  //     d3
  //       .forceManyBody()
  //       .strength(-15)
  //       .distanceMax(300)
  //   )
  //   .force('center', d3.forceCenter(this.width / 2, this.height / 4))
  //   .on('tick', () => this.ticked());

  // this.update();

  // Collapse the node and all it's children
  collapse = (d: any) => {
    if (d.children) {
      d._children = d.children;
      d._children.forEach(this.collapse);
      d.children = null;
    }
  };

  update = (source: any) => {
    console.log('inside update');
    // Assigns the x and y position for the nodes
    let treeData = this.treemap(this.root);

    // Compute the new tree layout.
    let nodes = treeData.descendants(),
      links = treeData.descendants().slice(1);

    // Normalize for fixed-depth.
    nodes.forEach(function(d: any) {
      d.y = d.depth * 180;
    });

    // ****************** Nodes section ***************************

    let i = 0;
    // Update the nodes...
    let node = this.svg.selectAll('g.node').data(nodes, function(d: any) {
      return d.id || (d.id = ++i);
    });

    // Enter any new modes at the parent's previous position.
    let nodeEnter = node
      .enter()
      .append('g')
      .attr('class', 'node')
      .attr('transform', function(d: any) {
        return 'translate(' + source.y0 + ',' + source.x0 + ')';
      })
      .on('click', (d: any) => this.click(d));

    console.log('XXX');

    // Add Circle for the nodes
    nodeEnter
      .append('circle')
      .attr('class', 'node')
      .attr('r', 1e-6)
      .style('fill', function(d: any) {
        return d._children ? '#0073dd' : '#ffc107';
      })
      .style('stroke', function(d: any) {
        return () =>
          this.colorScale(d.data.female / (d.data.female + d.data.male));
      });

    // Add labels for the nodes
    nodeEnter
      .append('text')
      .attr('dy', '.35em')
      .attr('x', function(d: any) {
        return d.children || d._children ? -13 : 13;
      })
      .attr('text-anchor', function(d: any) {
        return d.children || d._children ? 'end' : 'start';
      })
      .text(function(d: any) {
        return d.data.name;
      })
      .style('fill', function(d: any) {
        return () => this.colorScale(d.data.female / d.data.value);
      });

    // UPDATE
    let nodeUpdate = nodeEnter.merge(node);

    // Transition to the proper position for the node
    nodeUpdate
      .transition()
      .duration(this.duration)
      .attr('transform', function(d: any) {
        return 'translate(' + d.y + ',' + d.x + ')';
      });

    // Update the node attributes and style
    nodeUpdate
      .select('circle.node')
      .attr('r', 10)
      .style('fill', function(d: any) {
        return d._children ? '#0073dd' : '#ffc107';
      })
      .attr('cursor', 'pointer');

    // Remove any exiting nodes
    let nodeExit = node
      .exit()
      .transition()
      .duration(this.duration)
      .attr('transform', function(d: any) {
        return 'translate(' + source.y + ',' + source.x + ')';
      })
      .remove();

    // On exit reduce the node circles size to 0
    nodeExit.select('circle').attr('r', 1e-6);

    // On exit reduce the opacity of text labels
    nodeExit.select('text').style('fill-opacity', 1e-6);

    // ****************** links section ***************************

    // Update the links...
    let link = this.svg
      .selectAll('path.link')
      .data(links, function(d: any) {
        return d.id;
      })
      .style('stroke-width', function(d: any) {
        return () => this.widthScale(d.data.value);
      });

    // Enter any new links at the parent's previous position.
    let linkEnter = link
      .enter()
      .insert('path', 'g')
      .attr('class', 'link')
      .attr('d', function(d: any) {
        let o = { x: source.x0, y: source.y0 };
        return diagonal(o, o);
      })
      .style('stroke-width', function(d: any) {
        return () => this.widthScale(d.data.value);
      });

    // UPDATE
    let linkUpdate = linkEnter.merge(link);

    // Transition back to the parent element position
    linkUpdate
      .transition()
      .duration(this.duration)
      .attr('d', function(d: any) {
        return diagonal(d, d.parent);
      });

    // Remove any exiting links
    let linkExit = link
      .exit()
      .transition()
      .duration(this.duration)
      .attr('d', function(d: any) {
        let o = { x: source.x, y: source.y };
        return diagonal(o, o);
      })
      .style('stroke-width', function(d: any) {
        return () => this.widthScale(d.data.value);
      })
      .remove();

    // Store the old positions for transition.
    nodes.forEach(function(d: any) {
      d.x0 = d.x;
      d.y0 = d.y;
    });

    // Creates a curved (diagonal) path from parent to the child nodes
    function diagonal(s: any, d: any) {
      let path = `M ${s.y} ${s.x}
                C ${(s.y + d.y) / 2} ${s.x},
                  ${(s.y + d.y) / 2} ${d.x},
                  ${d.y} ${d.x}`;

      return path;
    }
  };

  // Toggle children on click.
  click(d: any) {
    console.log('inside click');
    if (d.children) {
      d._children = d.children;
      d.children = null;
    } else {
      d.children = d._children;
      d._children = null;
    }
    this.update(d);
  }
}
