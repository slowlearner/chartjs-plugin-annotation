module.exports = {
  tolerance: 0.0080,
  config: {
    type: 'scatter',
    options: {
      scales: {
        x: {
          display: true,
          min: -10,
          max: 10
        },
        y: {
          display: true,
          min: -10,
          max: 10
        }
      },
      plugins: {
        legend: false,
        annotation: {
          drawTime: 'afterDraw',
          annotations: {
            point1: {
              type: 'point',
              xScaleID: 'x',
              yScaleID: 'y',
              xValue: 4.5,
              yValue: 4.5,
              xAdjust: 30,
              yAdjust: 40,
              backgroundColor: 'rgba(101, 33, 171, 0.5)',
              borderColor: 'rgb(101, 33, 171)',
              borderWidth: 2,
              radius: 80
            },
            center1: {
              type: 'label',
              xScaleID: 'x',
              yScaleID: 'y',
              xValue: 4.5,
              yValue: 4.5,
              content: 'x: +30, y: +40',
              position: 'start',
              point: {
                enabled: true,
                backgroundColor: 'black'
              }
            },
            point2: {
              type: 'point',
              xScaleID: 'x',
              yScaleID: 'y',
              xValue: -4.5,
              yValue: 4.5,
              xAdjust: 30,
              yAdjust: -40,
              backgroundColor: 'rgba(101, 33, 171, 0.5)',
              borderColor: 'rgb(101, 33, 171)',
              borderWidth: 2,
              radius: 80
            },
            center2: {
              type: 'label',
              xScaleID: 'x',
              yScaleID: 'y',
              xValue: -4.5,
              yValue: 4.5,
              content: 'x: +30, y: -40',
              position: {
                x: 'start',
                y: 'end'
              },
              point: {
                enabled: true,
                backgroundColor: 'black'
              }
            },
            point3: {
              type: 'point',
              xScaleID: 'x',
              yScaleID: 'y',
              xValue: -4.5,
              yValue: -4.5,
              xAdjust: -30,
              yAdjust: -40,
              backgroundColor: 'rgba(101, 33, 171, 0.5)',
              borderColor: 'rgb(101, 33, 171)',
              borderWidth: 2,
              radius: 80
            },
            center3: {
              type: 'label',
              xScaleID: 'x',
              yScaleID: 'y',
              xValue: -4.5,
              yValue: -4.5,
              content: 'x: -30, y: -40',
              position: 'end',
              point: {
                enabled: true,
                backgroundColor: 'black'
              }
            },
            point4: {
              type: 'point',
              xScaleID: 'x',
              yScaleID: 'y',
              xValue: 4.5,
              yValue: -4.5,
              xAdjust: -30,
              yAdjust: 40,
              backgroundColor: 'rgba(101, 33, 171, 0.5)',
              borderColor: 'rgb(101, 33, 171)',
              borderWidth: 2,
              radius: 80
            },
            center4: {
              type: 'label',
              xScaleID: 'x',
              yScaleID: 'y',
              xValue: 4.5,
              yValue: -4.5,
              content: 'x: -30, y: +40',
              position: {
                x: 'end',
                y: 'start'
              },
              point: {
                enabled: true,
                backgroundColor: 'black'
              }
            },
          }
        }
      }
    }
  }
};