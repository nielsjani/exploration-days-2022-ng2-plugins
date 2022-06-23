import { Component, ViewChild } from '@angular/core';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'cegeka-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent {

  private pushableData: any[] = [{label: 'Bounce Man', value: 3.05, color: "yellow"}, {label: 'Choker', value: 3.43, color: "lightblue"}, {label: 'The Outside', value: 3.37, color: "purple"}];
  private pushableIndex = 0;

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  // Pie
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {color: "green", boxHeight: 40},
        display: true,
        position: 'top',
      },
      datalabels: {
        color: "black",
        formatter: (value, ctx) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
          }
        }
      }
    }
  };

  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [['Good', 'Day'], ['Shy', 'Away'], 'Saturday', ['Mulberry Street']],
    datasets: [{
      data: [3.24, 2.55, 2.52, 3.44],
      backgroundColor: ["white", "orange", "blue", "pink"],
      borderColor: "#c59d26"
    }]
  };
  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [DatalabelsPlugin];

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  addSlice(): void {
    if(this.pushableIndex>=this.pushableData.length) {
      console.log('out of data to push');
    } else {
      const toPush = this.pushableData[this.pushableIndex];
      this.pushableIndex++;
      if (this.pieChartData.labels) {
        this.pieChartData.labels.push([toPush.label]);
      }

      this.pieChartData.datasets[0].data.push(toPush.value);
      const currentBgColors: any = this.pieChartData.datasets[0].backgroundColor;
      currentBgColors.push(toPush.color)
      this.pieChartData.datasets[0].backgroundColor = currentBgColors;

      this.chart?.update();
    }
  }

  removeSlice(): void {
    if (this.pieChartData.labels) {
      this.pieChartData.labels.pop();
      this.pushableIndex--;
    }

    this.pieChartData.datasets[0].data.pop();

    this.chart?.update();
  }

  changeLegendPosition(): void {
    if (this.pieChartOptions?.plugins?.legend) {
      this.pieChartOptions.plugins.legend.position = this.pieChartOptions.plugins.legend.position === 'left' ? 'top' : 'left';
    }

    this.chart?.render();
  }

  toggleLegend(): void {
    if (this.pieChartOptions?.plugins?.legend) {
      this.pieChartOptions.plugins.legend.display = !this.pieChartOptions.plugins.legend.display;
    }

    this.chart?.render();
  }
}
