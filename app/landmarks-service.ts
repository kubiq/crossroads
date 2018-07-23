import { Injectable } from "@angular/core";
import { Landmark } from "./landmark";
import { LANDMARKS } from "./mock-landmarks";

@Injectable()
export class LandmarksService {
    private _selectedId = null;

    getLandmarks(): Landmark[] {
        return LANDMARKS;
    }

    getLandmark(id: string): Landmark {
        return LANDMARKS.filter(landmark => landmark.id === id)[0];
    }

    setSelectedId(id: number) {
        if (id < LANDMARKS.length) {
            this._selectedId = id;
        }
    }

    getSelected(): Landmark {
        return this._selectedId < 0 ? null : this.getLandmark(this._selectedId);
    }
}