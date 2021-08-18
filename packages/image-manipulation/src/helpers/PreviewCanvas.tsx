import { Box } from '@rocket.chat/fuselage';
import { fabric } from 'fabric';
import { useEffect, Dispatch, SetStateAction, FC } from 'react';

import { useManipulation } from '../context/ManipulationContext';

type PreviewCanvasProps = {
  setCanvas: Dispatch<SetStateAction<fabric.Canvas | null | undefined>>;
};

export const PreviewCanvas: FC<PreviewCanvasProps> = ({
  setCanvas,
}: PreviewCanvasProps) => {
  const { state } = useManipulation();
  const { width, height } = state.dimensions?.cropDimensions;
  const { modifierSelected } = state;

  useEffect(() => {
    console.log('Initializing Canvas', { width, height });

    const canvas = new fabric.Canvas('canvas', {
      height,
      width,
      isDrawingMode: modifierSelected === 'doodle',
    });
    // snippet to hide the rotation controls
    fabric.Object.prototype.controls.mtr = new fabric.Control({
      visible: false,
    });
    // eslint-disable-next-line new-cap
    new (fabric.Image as any).fromURL(
      state.imageSrc?.current,
      (item: fabric.Image) => {
        item.selectable = false;
        canvas?.add(item);
        canvas?.width && item.scaleToWidth(canvas.width);
        canvas?.sendToBack(item);
      }
    );
    setCanvas(canvas);
  }, []);

  return <Box is='canvas' id='canvas'></Box>;
};