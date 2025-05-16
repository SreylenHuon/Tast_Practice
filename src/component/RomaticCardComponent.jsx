import { LucideEdit, LucideEye, Square } from "lucide-react";
import React from "react";

export const RomaticCardComponent = () => {
  return (
    <>
      {" "}
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full text-sm text-left  bg-white">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="px-4 py-3">No</th>
              <th className="px-4 py-3">Where we are going</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">What we plan to do</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700"></tbody>
        </table>
      </div>
    </>
  );
};
