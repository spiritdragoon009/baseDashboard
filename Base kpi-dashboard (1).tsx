import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Rocket, ArrowUp, ArrowDown } from 'lucide-react';

const KPIDashboard = () => {
  const quarterlyData = [
    { quarter: 'Q1', launches: 12, asp: 100, gm: 30, rev: 1200 },
    { quarter: 'Q2', launches: 15, asp: 105, gm: 32, rev: 1575 },
    { quarter: 'Q3', launches: 13, asp: 108, gm: 33, rev: 1404 },
    { quarter: 'Q4', launches: 18, asp: 112, gm: 36, rev: 2016 }
  ];

  const rollingData = Array.from({ length: 12 }, (_, i) => ({
    month: new Date(2024, i, 1).toLocaleString('default', { month: 'short' }),
    launches: Math.floor(Math.random() * 10) + 5,
    revenue: Math.floor(Math.random() * 1000) + 500,
    gm: Math.floor(Math.random() * 40) + 20
  }));

  const competitiveData = Array.from({ length: 10 }, (_, i) => ({
    rank: i + 1,
    product: `Product ${i + 1}`,
    revenue: Math.floor(Math.random() * 10000) + 5000,
    growth: Math.floor(Math.random() * 40) - 20
  }));

  return (
    <div className="p-4 w-full max-w-7xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold mb-6">Launch Performance Dashboard</h1>

      {/* Summary Card */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Launches</CardTitle>
          <Rocket className="h-4 w-4 text-blue-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">58</div>
          <div className="text-xs text-gray-500">All time launches</div>
          <div className="flex items-center mt-2">
            <ArrowUp className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-sm text-green-500">12% from previous period</span>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="performance">
        <TabsList>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="rolling">Rolling Calendar</TabsTrigger>
          <TabsTrigger value="competitive">Competitive</TabsTrigger>
        </TabsList>

        <TabsContent value="performance">
          <div className="space-y-4">
            {/* Quarter on Quarter Launches */}
            <Card>
              <CardHeader>
                <CardTitle>Quarter on Quarter Launches</CardTitle>
              </CardHeader>
              <CardContent className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={quarterlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="quarter" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="launches" fill="#2563eb" name="Launches" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* ASP & GM Performance */}
            <Card>
              <CardHeader>
                <CardTitle>ASP & GM Performance</CardTitle>
              </CardHeader>
              <CardContent className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={quarterlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="quarter" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="asp" stroke="#2563eb" name="ASP" />
                    <Line type="monotone" dataKey="gm" stroke="#059669" name="Gross Margin" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="rolling">
          <Card>
            <CardHeader>
              <CardTitle>12 Month Rolling View</CardTitle>
            </CardHeader>
            <CardContent>
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Month</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Launches</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Revenue</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">GM %</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {rollingData.map((month) => (
                    <tr key={month.month}>
                      <td className="px-6 py-4 text-sm text-gray-900">{month.month}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{month.launches}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">${month.revenue}k</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{month.gm}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="competitive">
          <Card>
            <CardHeader>
              <CardTitle>Top 10 Products by Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rank</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Revenue</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">YoY Growth</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {competitiveData.map((product) => (
                    <tr key={product.rank}>
                      <td className="px-6 py-4 text-sm text-gray-900">{product.rank}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{product.product}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">${product.revenue.toLocaleString()}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 flex items-center">
                        {product.growth > 0 ? (
                          <ArrowUp className="h-4 w-4 text-green-500 mr-1" />
                        ) : (
                          <ArrowDown className="h-4 w-4 text-red-500 mr-1" />
                        )}
                        {Math.abs(product.growth)}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default KPIDashboard;