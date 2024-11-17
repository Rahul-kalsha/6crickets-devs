import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-camera-selection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './camera-selection.component.html',
  styleUrl: './camera-selection.component.scss'
})
export class CameraSelectionComponent {
  // Desired ranges
  desiredSubjectDistanceRange: [number, number] = [1, 10]; // Software Camera Subject Distance Array: [desiredMinDistance, desiredMaxDistance]
  desiredLightLevelRange: [number, number] = [100, 1000]; // Software Camera Light Level Array: [desiredMinLight, desiredMaxLight]

  // Hardware cameras array: [minDistance, maxDistance, minLight, maxLight]
  hardwareCameras: [number, number, number, number][] = [
    [0, 5, 50, 500],  // Camera 1
    [5, 10, 900, 1000],  // Camera 2
    [0, 10, 700, 800], // Camera 3
  ];

  // Result variable
  isSufficient: boolean | null = null;
  coverageType: "Single" | "Combined" | "Gap" | "None" = "None";

  // Method to check if hardware cameras are sufficient
  checkCameras() {
    this.isSufficient = this.isSoftwareCameraSufficient(
      this.desiredSubjectDistanceRange,
      this.desiredLightLevelRange,
      this.hardwareCameras
    );
  }
  // Old Function
  /*private isSoftwareCameraSufficient(
    desiredSubjectDistanceRange: [number, number],
    desiredLightLevelRange: [number, number],
    hardwareCameras: [number, number, number, number][]
  ): boolean {
    const [desiredMinDistance, desiredMaxDistance] = desiredSubjectDistanceRange;
    const [desiredMinLight, desiredMaxLight] = desiredLightLevelRange;

    // Sort hardware cameras by distance and then light range
    hardwareCameras.sort((a, b) => a[0] - b[0]);
    // Check if distance range is fully covered
    let currentMaxDistance = desiredMinDistance;
    const mapHardwareCamerasDistance = hardwareCameras.map(cam => [cam[0], cam[1]]);
    for (const [camMinDist, camMaxDist] of mapHardwareCamerasDistance) {
      if (camMinDist > currentMaxDistance) {
        return false; // Gap in distance coverage
      }
      currentMaxDistance = Math.max(currentMaxDistance, camMaxDist);
      if (currentMaxDistance >= desiredMaxDistance) {
        break; // Fully covered the distance range
      }
    }
    if (currentMaxDistance < desiredMaxDistance) {
      return false; // Distance not fully covered
    }

    // Now check if light range is fully covered
    hardwareCameras.sort((a, b) => a[2] - b[2]);
    let currentMaxLight = desiredMinLight;
    const mapHardwareCamerasLight = hardwareCameras.map(cam => [cam[2], cam[3]]);
    for (const [camMinLight, camMaxLight] of mapHardwareCamerasLight) {
      if (camMinLight > currentMaxLight) {
        return false; // Gap in light level coverage
      }
      currentMaxLight = Math.max(currentMaxLight, camMaxLight);
      if (currentMaxLight >= desiredMaxLight) {
        break; // Fully covered the light level range
      }
    }
    return currentMaxLight >= desiredMaxLight;
  }*/
  
  // Updated Function 
  private isSoftwareCameraSufficient(
    desiredSubjectDistanceRange: [number, number],
    desiredLightLevelRange: [number, number],
    hardwareCameras: [number, number, number, number][]
  ): boolean {
    const [desiredMinDistance, desiredMaxDistance] = desiredSubjectDistanceRange;
    const [desiredMinLight, desiredMaxLight] = desiredLightLevelRange;
    this.coverageType = "None";

    // Check if a single camera suffices
    for (const [camMinDist, camMaxDist, camMinLight, camMaxLight] of hardwareCameras) {
      if (
        camMinDist <= desiredMinDistance &&
        camMaxDist >= desiredMaxDistance &&
        camMinLight <= desiredMinLight &&
        camMaxLight >= desiredMaxLight
      ) {
        this.coverageType = "Single";
        return true; // Single camera suffices
      }
    }

    // If no single camera suffices, check combined coverage
    const distances: [number, number][] = hardwareCameras.map(([minD, maxD]) => [minD, maxD]);
    const lights: [number, number][] = hardwareCameras.map(([_, __, minL, maxL]) => [minL, maxL]);
    // console.log('distances & lights:', distances, lights);
    const isRangeCovered = (
      desiredMin: number,
      desiredMax: number,
      ranges: [number, number][]
    ) => {
      this.coverageType = "None";
      ranges.sort((a, b) => a[0] - b[0]);
      let currentMax = desiredMin;
      // console.log('currentMax:', currentMax);
      // console.log('ranges:', ranges);
      for (const [min, max] of ranges) {
        if (min > currentMax) {
          this.coverageType = "Gap";
          return false; // Gap detected
        }
        currentMax = Math.max(currentMax, max);
        if (currentMax >= desiredMax) {
          this.coverageType = "Combined";
          return true; // Fully covered
        }
      }
      return false; // Insufficient coverage
    };

    return (
      isRangeCovered(desiredMinDistance, desiredMaxDistance, distances) &&
      isRangeCovered(desiredMinLight, desiredMaxLight, lights)
    );
  }
}
