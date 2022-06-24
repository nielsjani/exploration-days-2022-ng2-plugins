import { ApplicationRef, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { TreeComponent, TreeNode } from '@circlon/angular-tree-component';

@Component({
  selector: 'cegeka-tree',
  templateUrl: './trees.component.html',
  styleUrls: ['./trees.component.scss']
})
export class TreesComponent {

  @ViewChild(TreeComponent)
  private tree: TreeComponent | undefined;

  private trenchSongs: string[] = ['Chlorine', 'Levitate', 'My Blood'];
  private trenchIndex = 0;

  rtl = false;

  nodes = [
    {
      id: 1,
      name: 'Vessel',
      isExpanded: true,
      children: [
        { id: 12, name: 'Ode to Sleep' },
        { id: 13, name: 'Migraine' },
        { id: 14, name: 'Car Radio' },
        { id: 15, name: 'Holding on to You' }
      ]
    },
    {
      id: 4,
      name: 'Blurryface',
      children: [
        { id: 41, name: 'Heavydirtysoul' },
        { id: 42, name: 'Ride' },
        { id: 43, name: 'Tear in my heart' },
        { id: 44, name: 'Stressed out' }
      ]
    },

    {
      id: 3,
      name: 'Scaled and Icy',
      children: [
        { id: 32, name: 'child1' },
        { id: 33, name: 'child2' }
      ]
    }
  ];
  options = {
    allowDrag: (node: any) => !node.isLeaf, allowDrop: true,
    //if true renders the tree from right to left
    // rtl: this.rtl
  };

   clickHistory = '';

  constructor(private appRef: ApplicationRef, private chDR: ChangeDetectorRef) {
  }

  addTrench() {
    const trench = {
      id: 2,
      name: 'Trench',
      children: [
        { id: 22, name: 'Jumpsuit' },
        { id: 23, name: 'Morph' }
      ]
    };

    this.nodes.push(trench);
    this.tree?.treeModel.update();
  }

  removeTrench() {
    const trenchNode = this.nodes.filter(node => node.name === 'Trench');
    if (trenchNode.length === 1) {
      this.nodes.splice(this.nodes.indexOf(trenchNode[0]), 1);
      this.tree?.treeModel.update();
    }
  }

  addTrenchSong() {
    const trenchNode = this.nodes.filter(node => node.name === 'Trench');
    if (trenchNode.length === 1 && this.trenchIndex < this.trenchSongs.length) {
      trenchNode[0].children.push({ id: 23 + this.trenchIndex, name: this.trenchSongs[this.trenchIndex] });
      this.trenchIndex++;
      this.tree?.treeModel.update();
    }
  }

  invertRtl() {
    this.rtl = !this.rtl;

  }

  handleNodeClicked($event: any) {
    const clickedNode: TreeNode = $event.node;
    if(clickedNode.isLeaf) {
      this.clickHistory += clickedNode.data.name + " ";
    }
  }
}
