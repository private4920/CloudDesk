import { useInstancesDemo } from '../hooks/useInstancesDemo';
import { buildUsage, calculateUsageSummary } from '../data/usage';
import { REGION_NAMES } from '../data/types';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Monitor, DollarSign, Activity } from 'lucide-react';

export default function Usage() {
  const { instances } = useInstancesDemo();
  const usageRows = buildUsage(instances);
  const summary = calculateUsageSummary(usageRows);

  // Sort by cost descending for display
  const sortedUsage = [...usageRows].sort((a, b) => b.estimatedCost - a.estimatedCost);

  return (
    <div className="max-w-7xl mx-auto px-8 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Usage & Cost</h1>
        <p className="text-sm text-gray-500">
          Track your cloud desktop usage and estimated costs. All charges are based on actual runtime.
        </p>
      </div>

      {/* Summary Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Total Hours */}
        <Card className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center">
              <Activity className="w-6 h-6 text-indigo-600" />
            </div>
          </div>
          <p className="text-sm font-medium text-gray-500 mb-1">Total Hours Used</p>
          <p className="text-3xl font-semibold text-gray-900 mb-1">
            {summary.totalHours.toFixed(1)}
            <span className="text-lg font-normal text-gray-500 ml-1">hours</span>
          </p>
          <p className="text-xs text-gray-500">Last 30 days</p>
        </Card>

        {/* Total Cost */}
        <Card className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-indigo-600" />
            </div>
          </div>
          <p className="text-sm font-medium text-gray-500 mb-1">Total Estimated Cost</p>
          <p className="text-3xl font-semibold text-gray-900 mb-1">
            ${summary.totalCost.toFixed(2)}
          </p>
          <p className="text-xs text-gray-500">Based on current usage</p>
        </Card>

        {/* Active Desktops */}
        <Card className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center">
              <Monitor className="w-6 h-6 text-indigo-600" />
            </div>
          </div>
          <p className="text-sm font-medium text-gray-500 mb-1">Active Desktops</p>
          <p className="text-3xl font-semibold text-gray-900 mb-1">
            {summary.activeDesktops}
          </p>
          <p className="text-xs text-gray-500">
            Avg ${summary.averageCostPerDesktop.toFixed(2)} per desktop
          </p>
        </Card>
      </div>

      {/* Usage Chart Area */}
      <Card className="p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Usage by Instance</h2>
        
        {/* Simple bar chart visualization */}
        <div className="space-y-4">
          {sortedUsage.filter(row => row.hours > 0).map((row) => {
            const maxHours = Math.max(...usageRows.map(r => r.hours));
            const widthPercent = maxHours > 0 ? (row.hours / maxHours) * 100 : 0;
            
            return (
              <div key={row.instanceId} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <span className="font-medium text-gray-900 truncate">
                      {row.instanceName}
                    </span>
                    <Badge 
                      variant={
                        row.status === 'RUNNING' ? 'success' : 
                        row.status === 'STOPPED' ? 'neutral' : 
                        'info'
                      }
                    >
                      {row.status === 'RUNNING' ? 'Running' : 
                       row.status === 'STOPPED' ? 'Stopped' : 
                       'Provisioning'}
                    </Badge>
                  </div>
                  <span className="text-gray-600 ml-4 whitespace-nowrap">
                    {row.hours.toFixed(1)} hrs
                  </span>
                </div>
                <div className="relative h-8 bg-gray-100 rounded-lg overflow-hidden">
                  <div 
                    className="absolute inset-y-0 left-0 bg-indigo-600 rounded-lg transition-all duration-300"
                    style={{ width: `${widthPercent}%` }}
                  />
                  <div className="absolute inset-0 flex items-center justify-end px-3">
                    <span className="text-xs font-medium text-gray-900">
                      ${row.estimatedCost.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
          
          {sortedUsage.filter(row => row.hours > 0).length === 0 && (
            <div className="text-center py-12">
              <Activity className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-sm text-gray-600">No usage data for this period</p>
            </div>
          )}
        </div>
      </Card>

      {/* Detailed Breakdown Table */}
      <Card className="overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Cost by Desktop</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900">
                  Desktop Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-900">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-gray-900">
                  Hours Used
                </th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-gray-900">
                  Avg. Hourly Rate
                </th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-gray-900">
                  Total Cost
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sortedUsage.map((row) => {
                const instance = instances.find(i => i.id === row.instanceId);
                return (
                  <tr key={row.instanceId} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-900">
                          {row.instanceName}
                        </span>
                        {instance && (
                          <span className="text-xs text-gray-500">
                            {REGION_NAMES[instance.region]}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge 
                        variant={
                          row.status === 'RUNNING' ? 'success' : 
                          row.status === 'STOPPED' ? 'neutral' : 
                          'info'
                        }
                      >
                        {row.status === 'RUNNING' ? 'Running' : 
                         row.status === 'STOPPED' ? 'Stopped' : 
                         'Provisioning'}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-right text-sm text-gray-900">
                      {row.hours.toFixed(1)}
                    </td>
                    <td className="px-6 py-4 text-right text-sm text-gray-600">
                      ${row.avgHourlyRate.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 text-right text-sm font-semibold text-gray-900">
                      ${row.estimatedCost.toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot className="bg-gray-50 border-t-2 border-gray-300">
              <tr>
                <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                  Total
                </td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4 text-right text-sm font-semibold text-gray-900">
                  {summary.totalHours.toFixed(1)}
                </td>
                <td className="px-6 py-4 text-right text-sm font-semibold text-gray-900">
                  ${(summary.totalCost / summary.totalHours || 0).toFixed(2)} avg
                </td>
                <td className="px-6 py-4 text-right text-sm font-semibold text-gray-900">
                  ${summary.totalCost.toFixed(2)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </Card>
    </div>
  );
}
