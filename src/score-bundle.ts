import { OpenSheetMusicDisplay } from 'opensheetmusicdisplay';

declare global {
  interface Window {
    OpenSheetMusicDisplay: typeof OpenSheetMusicDisplay;
  }
}

window.OpenSheetMusicDisplay = OpenSheetMusicDisplay;
