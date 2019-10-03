import { Component, OnInit } from '@angular/core';
//import * as d3 from 'd3';
import _ from 'lodash';
import { ApiService } from '../../api.service';
import { ShareDataService } from '../../share-data.service';
declare var d3: any;

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  width: any;
  height: any;
  force: any;
  svg: any;
  link: any;
  node: any;
  root: any;
  margin: any;
  i: any;
  message: any;
  loader: any = false;
  duration: any;
  treeData = {
    orgkey: 'dK468791727385',
    name: 'MICROSOFT'
  };
  // treeData: any;
  treemap: any;
  orgkey: any;
  nodeInfo: any;

  constructor(
    private apiService: ApiService,
    private shareData: ShareDataService
  ) {
    // this.setRoot(this.treeData);
  }

  setRoot = data => {
    // console.log('data', data);
    this.root = d3.hierarchy(data, function(d) {
      return d.children;
    });
    // console.log('this.root', this.root);
  };

  setInitialState = () => {
    // Collapse after the second level
    // this.root.children.forEach(this.collapse);

    this.update(this.root);
  };
  ngOnInit() {
    this.nodeInfo = this.shareData.node;
    // this.treeData = { name: this.nodeInfo.name, orgkey: this.nodeInfo.orgkey };
    console.log('this.nodeInfo', this.nodeInfo);
    console.log('this.treeData', this.treeData);
    this.setRoot(this.treeData);
    // Set the dimensions and margins of the diagram
    this.margin = { top: 20, right: 90, bottom: 30, left: 90 };
    this.width = 960 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;

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
    this.i = 0;
    this.duration = 750;
    // declares a tree layout and assigns the size
    this.treemap = d3.tree().size([this.height, this.width]);

    // Assigns parent, children, height, depth

    this.root.x0 = this.height / 2;
    this.root.y0 = 0;
    this.setInitialState();
  }

  // Collapse the node and all it's children
  collapse = d => {
    if (d.children) {
      d._children = d.children;
      d._children.forEach(this.collapse);
      d.children = null;
    }
  };

  update = source => {
    // console.log('this.root', this.root);
    // console.log('source', source);
    // Assigns the x and y position for the nodes
    var treeData = this.treemap(this.root);

    // Compute the new tree layout.
    var nodes = treeData.descendants(),
      links = treeData.descendants().slice(1);

    // Normalize for fixed-depth.
    nodes.forEach(function(d) {
      d.y = d.depth * 180;
    });

    // ****************** Nodes section ***************************

    // Update the nodes...
    var node = this.svg.selectAll('g.node').data(nodes, function(d) {
      return d.id || (d.id = ++this.i);
    });

    // Enter any new modes at the parent's previous position.
    var nodeEnter = node
      .enter()
      .append('g')
      .attr('class', 'node')
      .attr('transform', function(d) {
        return 'translate(' + source.y0 + ',' + source.x0 + ')';
      })
      .on('click', this.click);

    // Add Circle for the nodes
    nodeEnter
      .append('circle')
      .attr('class', 'node')
      .attr('r', 1e-6)
      .style('fill', function(d) {
        return d._children ? 'lightsteelblue' : '#fff';
      });

    // Add labels for the nodes
    nodeEnter
      .append('text')
      .attr('dy', '.35em')
      .attr('x', function(d) {
        return d.children || d._children ? -13 : 13;
      })
      .attr('text-anchor', function(d) {
        return d.children || d._children ? 'end' : 'start';
      })
      .text(function(d) {
        return d.data.name;
      });

    // UPDATE
    var nodeUpdate = nodeEnter.merge(node);

    // Transition to the proper position for the node
    nodeUpdate
      .transition()
      .duration(this.duration)
      .attr('transform', function(d) {
        return 'translate(' + d.y + ',' + d.x + ')';
      });

    // Update the node attributes and style
    nodeUpdate
      .select('circle.node')
      .attr('r', 10)
      .style('fill', function(d) {
        return d._children ? 'lightsteelblue' : '#fff';
      })
      .attr('cursor', 'pointer');

    // Remove any exiting nodes
    var nodeExit = node
      .exit()
      .transition()
      .duration(this.duration)
      .attr('transform', function(d) {
        return 'translate(' + source.y + ',' + source.x + ')';
      })
      .remove();

    // On exit reduce the node circles size to 0
    nodeExit.select('circle').attr('r', 1e-6);

    // On exit reduce the opacity of text labels
    nodeExit.select('text').style('fill-opacity', 1e-6);

    // ****************** links section ***************************

    // Update the links...
    var link = this.svg.selectAll('path.link').data(links, function(d) {
      return d.id;
    });

    // Enter any new links at the parent's previous position.
    var linkEnter = link
      .enter()
      .insert('path', 'g')
      .attr('class', 'link')
      .attr('d', function(d) {
        var o = { x: source.x0, y: source.y0 };
        return diagonal(o, o);
      });

    // UPDATE
    var linkUpdate = linkEnter.merge(link);

    // Transition back to the parent element position
    linkUpdate
      .transition()
      .duration(this.duration)
      .attr('d', function(d) {
        return diagonal(d, d.parent);
      });

    // Remove any exiting links
    var linkExit = link
      .exit()
      .transition()
      .duration(this.duration)
      .attr('d', function(d) {
        var o = { x: source.x, y: source.y };
        return diagonal(o, o);
      })
      .remove();

    // Store the old positions for transition.
    nodes.forEach(function(d) {
      d.x0 = d.x;
      d.y0 = d.y;
    });

    // Creates a curved (diagonal) path from parent to the child nodes
    function diagonal(s, d) {
      let path = `M ${s.y} ${s.x}
            C ${(s.y + d.y) / 2} ${s.x},
              ${(s.y + d.y) / 2} ${d.x},
              ${d.y} ${d.x}`;

      return path;
    }
  };

  handleChildren = d => {
    if (d.children) {
      d._children = d.children;
      d.children = null;
    } else {
      d.children = d._children;
      d._children = null;
    }
    return d;
  };

  updateData = (node, updatedData) => {
    // console.log('update Data');
    // console.log('node', node);
    // console.log('New Node', node);

    this.setRoot(updatedData);
    this.update(this.handleChildren(node));

    // this.setInitialState();
  };

  // click = d => {
  //   //   console.log(d);

  //   if (d.children) {
  //     d._children = d.children;
  //     d.children = null;
  //     this.update(d);
  //   } else {
  //     let data = [
  //       {
  //         name: 'MICROSOFT PROPERTIES UK LIMITED',
  //         orgkey: 'dK018401192829'
  //       },
  //       { name: 'MICROSOFT EMEA', orgkey: 'dK934835055619' }
  //     ];
  //     var children = [];
  //     for (var i = 0; i < data.length; i++) {
  //       children.push(i);
  //     }

  //     d.children = children;
  //     this.update(d);
  //   }
  // };

  // findAndUpdate = (obj, node) => {
  //   console.log('obj', obj);
  //   let data = [
  //     {
  //       name: 'XXX',
  //       orgkey: 'dK018s401192829'
  //     },
  //     { name: 'YYY', orgkey: 'dK9348350d55619' }
  //   ];
  //   if (obj.orgkey == node.data.orgkey) {
  //     const childData = _.union(obj['children'] || [], data);
  //     obj['children'] = childData;
  //     // console.log('if found', obj);
  //     return obj;
  //   }

  //   // console.log('childData', childData);
  //   if (obj['children'] && obj['children'].length > 0) {
  //     for (const child of obj['children']) {
  //       // console.log('child', child);
  //       return this.findAndUpdate(child, node);
  //     }
  //   }
  // };

  findAndUpdate = (d, child) => {
    let dataSet = [
      {
        name: 'XXX',
        orgkey: 'dK018s401192829'
      },
      { name: 'YYY', orgkey: 'dK9348350d55619' }
    ];
    let dataSet1 = [
      {
        name: '12XXX',
        orgkey: 'dK018s4011192829'
      },
      { name: '12YYY', orgkey: 'dK91348350d55619' }
    ];
    let mainArray = [];

    mainArray.push(this.treeData);
    mainArray.forEach(function iter(a) {
      if (d.data.orgkey == a.orgkey) {
        console.log('xxx');
        let childData = [];
        childData = child;
        a.children = childData;
      }
      Array.isArray(a.children) && a.children.forEach(iter);
      // a.children && a.children.length > 0 && a.children.forEach(iter);
    });
    setTimeout(undefined, 1000);
    return mainArray[0];
  };
  // Toggle children on click.
  click = d => {
    // console.log('clicked node', d);
    // console.log('this.treeData', this.treeData);
    let objectFound = {};
    let childrenFromApi = [];
    this.loader = true;
    // dK468791727385
    this.apiService.getChildren(d.data.orgkey).subscribe(
      data => {
        this.loader = false;
        console.log('data', data);
        if (data && data['children']) {
          console.log('childrenFromApi', data['children'][0]);
          childrenFromApi = _.map(
            data['children'][0],
            _.partialRight(_.pick, ['name', 'orgkey'])
          );
          if (data['children'][0].length > 1) {
            childrenFromApi.splice(-(data['children'][0].length - 10));
          }
          console.log('childrenFromApi', childrenFromApi);
          objectFound = this.findAndUpdate(d, childrenFromApi);
          console.log('objectFound', objectFound);
          // this.treeData = objectFound;
          this.updateData(d, objectFound);
        }
      },
      err => {
        this.loader = false;
        console.log('err', err);
      }
    );
    // _.forEach(mainArray, function(obj) {
    //   _.set(_.find(obj.children, { orgkey: d.data.orgkey }), 'children', data);
    // });
    // objectFound = new Proxy({}, this.findAndUpdate(this.treeData, d));
    // objectFound = this.findAndUpdate(this.treeData, d);
  };
}
