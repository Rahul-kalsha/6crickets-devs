import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CameraSelectionComponent } from './camera-selection.component';

describe('CameraSelectionComponent', () => {
  let component: CameraSelectionComponent;
  let fixture: ComponentFixture<CameraSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CameraSelectionComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CameraSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
  describe('isSoftwareCameraSufficient', () => {
    it('should return true if a single hardware camera suffices', () => {
      const desiredSubjectDistanceRange: [number, number] = [1, 10];
      const desiredLightLevelRange: [number, number] = [100, 1000];
      const hardwareCameras: [number, number, number, number][] = [
        [1, 10, 100, 1000],
      ];

      const result = component['isSoftwareCameraSufficient'](
        desiredSubjectDistanceRange,
        desiredLightLevelRange,
        hardwareCameras
      );

      expect(result).toBeTrue();
    });

    it('should return true if multiple hardware cameras fully cover the ranges', () => {
      const desiredSubjectDistanceRange: [number, number] = [1, 10];
      const desiredLightLevelRange: [number, number] = [100, 1000];
      const hardwareCameras: [number, number, number, number][] = [
        [0, 5, 50, 500],
        [5, 10, 500, 1500],
      ];

      const result = component['isSoftwareCameraSufficient'](
        desiredSubjectDistanceRange,
        desiredLightLevelRange,
        hardwareCameras
      );

      expect(result).toBeTrue();
    });

    it('should return false if there is a gap in the distance range', () => {
      const desiredSubjectDistanceRange: [number, number] = [1, 10];
      const desiredLightLevelRange: [number, number] = [100, 1000];
      const hardwareCameras: [number, number, number, number][] = [
        [0, 5, 50, 500],
        [6, 10, 600, 1500], // Gap between 5 and 6
      ];

      const result = component['isSoftwareCameraSufficient'](
        desiredSubjectDistanceRange,
        desiredLightLevelRange,
        hardwareCameras
      );

      expect(result).toBeFalse();
    });

    it('should return false if there is a gap in the light level range', () => {
      const desiredSubjectDistanceRange: [number, number] = [1, 10];
      const desiredLightLevelRange: [number, number] = [100, 1000];
      const hardwareCameras: [number, number, number, number][] = [
        [0, 10, 50, 500],
        [0, 10, 600, 1500], // Gap between 500 and 600
      ];

      const result = component['isSoftwareCameraSufficient'](
        desiredSubjectDistanceRange,
        desiredLightLevelRange,
        hardwareCameras
      );

      expect(result).toBeFalse();
    });

    it('should return false if no hardware cameras are available', () => {
      const desiredSubjectDistanceRange: [number, number] = [1, 10];
      const desiredLightLevelRange: [number, number] = [100, 1000];
      const hardwareCameras: [number, number, number, number][] = [];

      const result = component['isSoftwareCameraSufficient'](
        desiredSubjectDistanceRange,
        desiredLightLevelRange,
        hardwareCameras
      );

      expect(result).toBeFalse();
    });

    it('should return false if no cameras cover the desired range', () => {
      const desiredSubjectDistanceRange: [number, number] = [1, 10];
      const desiredLightLevelRange: [number, number] = [100, 1000];
      const hardwareCameras: [number, number, number, number][] = [
        [0, 5, 50, 99], // Light range doesn't reach 100
        [5, 10, 1001, 1500], // Light range starts after 1000
      ];

      const result = component['isSoftwareCameraSufficient'](
        desiredSubjectDistanceRange,
        desiredLightLevelRange,
        hardwareCameras
      );

      expect(result).toBeFalse();
    });
  });
});
