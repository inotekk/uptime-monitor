/** Machine-readable window declared in a maintenance issue. */
export interface MaintenanceWindow {
    start: string;
    end: string;
    expectedDown: string[];
    expectedDegraded: string[];
}
/** Parse and validate the hidden metadata carried by a maintenance issue. */
export declare const parseMaintenanceWindow: (body: string | null | undefined) => MaintenanceWindow | null;
