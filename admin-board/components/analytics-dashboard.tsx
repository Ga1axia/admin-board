'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend, AreaChart, Area } from 'recharts'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import React, { useState } from "react"
import { format, subDays } from 'date-fns';

// Function to generate random data
const generateRandomData = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

// Create a dataset for the past 365 days
const completeData = Array.from({ length: 365 }, (_, index) => {
  const date = format(subDays(new Date(), index), 'yyyy-MM-dd');
  return {
    date,
    likes: generateRandomData(100, 500),
    shares: generateRandomData(50, 200),
    comments: generateRandomData(20, 100),
    userCount: generateRandomData(1000, 5000),
    eventCount: generateRandomData(1, 10),
    registeredUserCount: generateRandomData(10, 50),
    eventLikes: generateRandomData(50, 150),
  };
});

// Example usage
console.log(completeData);

export function AnalyticsDashboard() {
  // Mock data for demonstration
  const timeSeriesData = [
    { name: 'Jan', likes: 4000, users: 2400, shares: 2400 },
    { name: 'Feb', likes: 3000, users: 1398, shares: 2210 },
    { name: 'Mar', likes: 2000, users: 9800, shares: 2290 },
    { name: 'Apr', likes: 2780, users: 3908, shares: 2000 },
    { name: 'May', likes: 1890, users: 4800, shares: 2181 },
    { name: 'Jun', likes: 2390, users: 3800, shares: 2500 },
  ]

  const sharesByPlatform = [
    { name: 'Facebook', value: 400 },
    { name: 'Twitter', value: 300 },
    { name: 'Instagram', value: 300 },
    { name: 'LinkedIn', value: 200 },
  ]

  const deviceUsage = [
    { name: 'Mobile', value: 70 },
    { name: 'Desktop', value: 20 },
    { name: 'Tablet', value: 10 },
  ]

  const monthlyData = [
    { name: 'Jun', likes: 4000, shares: 2400 },
    { name: 'Jul', likes: 3000, shares: 2210 },
    { name: 'Aug', likes: 2000, shares: 2290 },
    { name: 'Sept', likes: 2780, shares: 2000 },
    { name: 'Oct', likes: 1890, shares: 2181 },
    { name: 'Nov', likes: 2390, shares: 2500 },
  ]

  const weeklyData = [
    { name: 'Nov 25 - Dec 1', likes: 1200, shares: 800 },
    { name: 'Dec 2 - Dec 8', likes: 1400, shares: 900 },
    { name: 'Dec 9 - Dec 15', likes: 1100, shares: 750 },
    { name: 'Dec 16 - Dec 22', likes: 1300, shares: 850 },
  ]

  const dailyData = [
    { name: '12', likes: 200, shares: 150 },
    { name: '13', likes: 180, shares: 130 },
    { name: '14', likes: 250, shares: 180 },
    { name: '15', likes: 220, shares: 160 },
    { name: '16', likes: 280, shares: 200 },
    { name: '17', likes: 250, shares: 190 },
    { name: '18', likes: 210, shares: 170 },
  ]

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

  // Add mock data for reported comments
  const reportedComments = [
    {
      id: '1',
      user: 'user123',
      comment: 'This is an inappropriate comment...',
      reportedBy: 'concerned_user',
      reason: 'Inappropriate content',
      date: '2024-03-18',
    },
    {
      id: '2',
      user: 'troublemaker456',
      comment: 'Another reported comment...',
      reportedBy: 'community_member',
      reason: 'Harassment',
      date: '2024-03-17',
    },
  ]

  // Add mock data for ticket feedback
  const ticketFeedback = [
    {
      ticketId: "T-1234",
      date: "2024-03-18",
      user: "john_doe",
      subject: "Event Registration Issue",
      message: "User reported difficulty accessing the registration form for upcoming events. Issue was resolved by clearing cache.",
      status: "Resolved",
      priority: "Medium"
    },
    {
      ticketId: "T-1235",
      date: "2024-03-17",
      user: "sarah_smith",
      subject: "Payment Processing Error",
      message: "Payment gateway timeout during checkout. Technical team investigated and fixed the connection issue.",
      status: "Resolved",
      priority: "High"
    },
    {
      ticketId: "T-1236",
      date: "2024-03-16",
      user: "mike_jones",
      subject: "Profile Update Bug",
      message: "User unable to update profile picture. Found to be a file size limitation issue.",
      status: "Pending",
      priority: "Low"
    },
  ]

  // Add handler for removing comments
  const handleRemoveComment = (commentId: string) => {
    console.log(`Removing comment with ID: ${commentId}`)
    // Add your comment removal logic here
  }

  // Add state for both tables
  const [expandedComment, setExpandedComment] = useState<string | null>(null);
  const [expandedTicket, setExpandedTicket] = useState<string | null>(null);

  // Toggle handlers
  const toggleComment = (id: string) => {
    setExpandedComment(expandedComment === id ? null : id);
  };

  const toggleTicket = (id: string) => {
    setExpandedTicket(expandedTicket === id ? null : id);
  };

  // Add specific data for event likes in different time periods
  const monthlyEventData = [
    { name: 'Jun', likes: 4000, users: 2400, events: 45 },
    { name: 'Jul', likes: 3000, users: 1398, events: 38 },
    { name: 'Aug', likes: 2000, users: 9800, events: 52 },
    { name: 'Sep', likes: 2780, users: 3908, events: 41 },
    { name: 'Oct', likes: 1890, users: 4800, events: 37 },
    { name: 'Nov', likes: 2390, users: 3800, events: 48 },
  ]

  const weeklyEventData = [
    { name: 'Nov 25 - Dec 1', likes: 1200, users: 800, events: 12 },
    { name: 'Dec 2 - Dec 8', likes: 1400, users: 900, events: 15 },
    { name: 'Dec 9 - Dec 15', likes: 1100, users: 750, events: 10 },
    { name: 'Dec 16 - Dec 22', likes: 1300, users: 850, events: 14 },
  ]

  const dailyEventData = [
    { name: '12', likes: 200, users: 150, events: 4 },
    { name: '13', likes: 180, users: 130, events: 3 },
    { name: '14', likes: 250, users: 180, events: 5 },
    { name: '15', likes: 220, users: 160, events: 4 },
    { name: '16', likes: 280, users: 200, events: 6 },
    { name: '17', likes: 250, users: 190, events: 5 },
    { name: '18', likes: 210, users: 170, events: 4 },
  ]

  // Add new data for usage metrics
  const monthlyUsageData = [
    { name: 'Jun', avgDailyUse: 25.5, avgSession: 12.8 },
    { name: 'Jul', avgDailyUse: 24.2, avgSession: 11.5 },
    { name: 'Aug', avgDailyUse: 28.1, avgSession: 13.2 },
    { name: 'Sep', avgDailyUse: 26.7, avgSession: 12.9 },
    { name: 'Oct', avgDailyUse: 23.4, avgSession: 11.8 },
    { name: 'Nov', avgDailyUse: 27.3, avgSession: 13.5 },
  ]

  const weeklyUsageData = [
    { name: 'Nov 25 - Dec 1', avgDailyUse: 26.2, avgSession: 12.4 },
    { name: 'Dec 2 - Dec 8', avgDailyUse: 25.8, avgSession: 12.1 },
    { name: 'Dec 9 - Dec 15', avgDailyUse: 27.5, avgSession: 13.2 },
    { name: 'Dec 16 - Dec 22', avgDailyUse: 24.9, avgSession: 11.8 },
  ]

  const dailyUsageData = [
    { name: '12', avgDailyUse: 24.5, avgSession: 11.9 },
    { name: '13', avgDailyUse: 25.2, avgSession: 12.3 },
    { name: '14', avgDailyUse: 26.8, avgSession: 13.1 },
    { name: '15', avgDailyUse: 23.9, avgSession: 11.5 },
    { name: '16', avgDailyUse: 27.4, avgSession: 13.4 },
    { name: '17', avgDailyUse: 25.7, avgSession: 12.6 },
    { name: '18', avgDailyUse: 26.1, avgSession: 12.8 },
  ]

  // Add data for user growth
  const userGrowthData = [
    { name: 'Sep', users: 78500 },
    { name: 'Oct', users: 82300 },
    { name: 'Nov', users: 85900 },
    { name: 'Dec', users: 88700 },
    { name: 'Jan', users: 90500 },
    { name: 'Feb', users: 92100 },
  ]

  // Add this new mock data near the top with other mock data
  const eventTypeData = [
    { name: 'Networking', value: 35 },
    { name: 'Tech Talks', value: 25 },
    { name: 'Speaker Events', value: 20 },
    { name: 'Workshops', value: 15 },
    { name: 'Social Gatherings', value: 5 },
  ]

  // Update the engagement data to reflect the correct time spans
  const engagementDataMonthly = [
    { name: 'Jan', likes: 4000, shares: 2400 },
    { name: 'Feb', likes: 3000, shares: 2210 },
    { name: 'Mar', likes: 2000, shares: 2290 },
    { name: 'Apr', likes: 2780, shares: 2000 },
    { name: 'May', likes: 1890, shares: 2181 },
    { name: 'Jun', likes: 2390, shares: 2500 },
  ];

  const engagementDataWeekly = [
    { name: 'Week 1', likes: 1200, shares: 800 },
    { name: 'Week 2', likes: 1400, shares: 900 },
    { name: 'Week 3', likes: 1100, shares: 750 },
    { name: 'Week 4', likes: 1300, shares: 850 },
  ];

  const engagementDataDaily = [
    { name: '12', likes: 200, shares: 150 },
    { name: '13', likes: 180, shares: 130 },
    { name: '14', likes: 250, shares: 180 },
    { name: '15', likes: 220, shares: 160 },
    { name: '16', likes: 280, shares: 200 },
    { name: '17', likes: 250, shares: 190 },
    { name: '18', likes: 210, shares: 170 },
  ];

  // Update the usage metrics data to reflect the correct time spans
  const usageMetricsMonthly = [
    { name: 'Jan', avgDailyUse: 25.5, avgSession: 12.8 },
    { name: 'Feb', avgDailyUse: 24.2, avgSession: 11.5 },
    { name: 'Mar', avgDailyUse: 28.1, avgSession: 13.2 },
    { name: 'Apr', avgDailyUse: 26.7, avgSession: 12.9 },
    { name: 'May', avgDailyUse: 23.4, avgSession: 11.8 },
    { name: 'Jun', avgDailyUse: 27.3, avgSession: 13.5 },
  ];

  const usageMetricsWeekly = [
    { name: 'Week 1', avgDailyUse: 26.2, avgSession: 12.4 },
    { name: 'Week 2', avgDailyUse: 25.8, avgSession: 12.1 },
    { name: 'Week 3', avgDailyUse: 27.5, avgSession: 13.2 },
    { name: 'Week 4', avgDailyUse: 24.9, avgSession: 11.8 },
  ];

  const usageMetricsDaily = [
    { name: '12', avgDailyUse: 24.5, avgSession: 11.9 },
    { name: '13', avgDailyUse: 25.2, avgSession: 12.3 },
    { name: '14', avgDailyUse: 26.8, avgSession: 13.1 },
    { name: '15', avgDailyUse: 23.9, avgSession: 11.5 },
    { name: '16', avgDailyUse: 27.4, avgSession: 13.4 },
    { name: '17', avgDailyUse: 25.7, avgSession: 12.6 },
    { name: '18', avgDailyUse: 26.1, avgSession: 12.8 },
  ];

  return (
    <div className="min-h-screen bg-[#f0fff4] p-8">
      <div className="flex items-center">
      </div>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold text-green-800">Centrally Analytics Dashboard</h1>
        
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-[600px] grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="engagement">Engagement</TabsTrigger>
            <TabsTrigger value="moderator">Moderator</TabsTrigger>
            <TabsTrigger value="completeData">Complete Data</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Key Metrics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Average Use Time</p>
                        <p className="text-lg font-bold text-green-600">24.5 min</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Avg Session Length</p>
                        <p className="text-lg font-bold text-green-600">12.3 min</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Total Comments</p>
                        <p className="text-lg font-bold text-green-600">15.2K</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Total Events</p>
                        <p className="text-lg font-bold text-green-600">432</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Total Users</p>
                        <p className="text-lg font-bold text-green-600">92.1K</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">Total Likes</p>
                        <p className="text-lg font-bold text-green-600">213.2K</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Usage by Device</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={200}>
                      <PieChart>
                        <Pie
                          data={deviceUsage}
                          cx="50%"
                          cy="50%"
                          innerRadius={40}
                          outerRadius={60}
                          fill="#8884d8"
                          paddingAngle={5}
                          dataKey="value"
                          label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                        >
                          {deviceUsage.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend verticalAlign="bottom" height={30} />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Shares by Platform</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={200}>
                      <PieChart>
                        <Pie
                          data={sharesByPlatform}
                          cx="50%"
                          cy="50%"
                          innerRadius={40}
                          outerRadius={60}
                          fill="#8884d8"
                          paddingAngle={5}
                          dataKey="value"
                          label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                        >
                          {sharesByPlatform.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend verticalAlign="bottom" height={30} />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              {/* User Growth Chart */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">User Growth</CardTitle>
                  <CardDescription className="text-xs">Total user count over the last 6 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[120px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={userGrowthData}>
                        <defs>
                          <linearGradient id="userGrowth" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#4ade80" stopOpacity={0.2}/>
                            <stop offset="95%" stopColor="#4ade80" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis 
                          dataKey="name"
                          tickLine={false}
                          tick={{ fontSize: 10 }}
                        />
                        <YAxis 
                          tickLine={false}
                          tickFormatter={(value) => `${(value / 1000).toFixed(1)}k`}
                          tick={{ fontSize: 10 }}
                        />
                        <Tooltip 
                          formatter={(value) => [`${(Number(value)).toLocaleString()} users`, 'Total Users']}
                        />
                        <Area
                          type="monotone"
                          dataKey="users"
                          stroke="#4ade80"
                          fillOpacity={1}
                          fill="url(#userGrowth)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events">
            <div className="grid gap-6">
              <div className="grid grid-cols-3 gap-6">
                {/* Update the Event Analytics card to span 2 columns */}
                <Card className="col-span-2">
                  <CardHeader>
                    <CardTitle>Event Analytics</CardTitle>
                    <Tabs defaultValue="monthly" className="w-full">
                      <TabsList className="grid w-[400px] grid-cols-3">
                        <TabsTrigger value="monthly">Monthly</TabsTrigger>
                        <TabsTrigger value="weekly">Weekly</TabsTrigger>
                        <TabsTrigger value="daily">Daily</TabsTrigger>
                      </TabsList>

                      <TabsContent value="monthly">
                        <div className="pt-4">
                          <ResponsiveContainer width="100%" height={400}>
                            <LineChart data={monthlyEventData}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="name" />
                              <YAxis yAxisId="left" />
                              <YAxis yAxisId="right" orientation="right" />
                              <Tooltip 
                                formatter={(value, name) => [
                                  value,
                                  typeof name === 'string' ? name.charAt(0).toUpperCase() + name.slice(1) : name
                                ]}
                              />
                              <Legend />
                              <Line 
                                yAxisId="left"
                                type="monotone" 
                                dataKey="likes" 
                                stroke="#4ade80" 
                                name="Likes"
                              />
                              <Line 
                                yAxisId="left"
                                type="monotone" 
                                dataKey="users" 
                                stroke="#2dd4bf" 
                                name="Registered Users"
                              />
                              <Line 
                                yAxisId="right"
                                type="monotone" 
                                dataKey="events" 
                                stroke="#f472b6" 
                                name="Total Events"
                              />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                      </TabsContent>

                      <TabsContent value="weekly">
                        <div className="pt-4">
                          <ResponsiveContainer width="100%" height={400}>
                            <LineChart data={weeklyEventData}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="name" />
                              <YAxis yAxisId="left" />
                              <YAxis yAxisId="right" orientation="right" />
                              <Tooltip 
                                formatter={(value, name) => [
                                  value,
                                  typeof name === 'string' ? name.charAt(0).toUpperCase() + name.slice(1) : name
                                ]}
                              />
                              <Legend />
                              <Line 
                                yAxisId="left"
                                type="monotone" 
                                dataKey="likes" 
                                stroke="#4ade80" 
                                name="Likes"
                              />
                              <Line 
                                yAxisId="left"
                                type="monotone" 
                                dataKey="users" 
                                stroke="#2dd4bf" 
                                name="Registered Users"
                              />
                              <Line 
                                yAxisId="right"
                                type="monotone" 
                                dataKey="events" 
                                stroke="#f472b6" 
                                name="Total Events"
                              />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                      </TabsContent>

                      <TabsContent value="daily">
                        <div className="pt-4">
                          <ResponsiveContainer width="100%" height={400}>
                            <LineChart data={dailyEventData}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis 
                                dataKey="name" 
                                tickFormatter={(value) => `${value}th`}
                              />
                              <YAxis yAxisId="left" />
                              <YAxis yAxisId="right" orientation="right" />
                              <Tooltip 
                                labelFormatter={(label) => `${label}th`}
                                formatter={(value, name) => [
                                  value,
                                  typeof name === 'string' ? name.charAt(0).toUpperCase() + name.slice(1) : name
                                ]}
                              />
                              <Legend />
                              <Line 
                                yAxisId="left"
                                type="monotone" 
                                dataKey="likes" 
                                stroke="#4ade80" 
                                name="Likes"
                              />
                              <Line 
                                yAxisId="left"
                                type="monotone" 
                                dataKey="users" 
                                stroke="#2dd4bf" 
                                name="Registered Users"
                              />
                              <Line 
                                yAxisId="right"
                                type="monotone" 
                                dataKey="events" 
                                stroke="#f472b6" 
                                name="Total Events"
                              />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardHeader>
                </Card>

                {/* Add new Event Types card */}
                <Card>
                  <CardHeader>
                    <CardTitle>Event Types Distribution</CardTitle>
                    <CardDescription>Breakdown of different event categories</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={400}>
                      <PieChart>
                        <Pie
                          data={eventTypeData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          fill="#8884d8"
                          paddingAngle={5}
                          
                          label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                        >
                          {eventTypeData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip 
                          formatter={(value) => [`${value}%`, 'Percentage']}
                        />
                        <Legend 
                          layout="vertical" 
                          align="center"
                          verticalAlign="bottom"
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Engagement Tab */}
          <TabsContent value="engagement">
            <div className="grid grid-cols-2 gap-6">
              {/* Engagement Over Time Chart */}
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Engagement Over Time</CardTitle>
                  <Tabs defaultValue="monthly" className="w-full">
                    <TabsList className="grid w-[300px] grid-cols-3">
                      <TabsTrigger value="monthly">Monthly</TabsTrigger>
                      <TabsTrigger value="weekly">Weekly</TabsTrigger>
                      <TabsTrigger value="daily">Daily</TabsTrigger>
                    </TabsList>

                    <TabsContent value="monthly">
                      <div className="pt-4">
                        <ResponsiveContainer width="100%" height={400}>
                          <LineChart data={engagementDataMonthly}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="likes" stroke="#4ade80" name="Likes" />
                            <Line type="monotone" dataKey="shares" stroke="#2dd4bf" name="Shares" />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </TabsContent>

                    <TabsContent value="weekly">
                      <div className="pt-4">
                        <ResponsiveContainer width="100%" height={400}>
                          <LineChart data={engagementDataWeekly}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="likes" stroke="#4ade80" name="Likes" />
                            <Line type="monotone" dataKey="shares" stroke="#2dd4bf" name="Shares" />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </TabsContent>

                    <TabsContent value="daily">
                      <div className="pt-4">
                        <ResponsiveContainer width="100%" height={400}>
                          <LineChart data={engagementDataDaily}>
                            <CartesianGrid strokeDasharray="3 3" />
                                                        <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="likes" stroke="#4ade80" name="Likes" />
                            <Line type="monotone" dataKey="shares" stroke="#2dd4bf" name="Shares" />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardHeader>
              </Card>

              {/* Usage Metrics Chart */}
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Usage Metrics</CardTitle>
                  <Tabs defaultValue="monthly" className="w-full">
                    <TabsList className="grid w-[300px] grid-cols-3">
                      <TabsTrigger value="monthly">Monthly</TabsTrigger>
                      <TabsTrigger value="weekly">Weekly</TabsTrigger>
                      <TabsTrigger value="daily">Daily</TabsTrigger>
                    </TabsList>

                    <TabsContent value="monthly">
                      <div className="pt-4">
                        <ResponsiveContainer width="100%" height={400}>
                          <LineChart data={usageMetricsMonthly}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="avgDailyUse" stroke="#4ade80" name="Avg Daily Use Time" />
                            <Line type="monotone" dataKey="avgSession" stroke="#2dd4bf" name="Avg Session Length" />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </TabsContent>

                    <TabsContent value="weekly">
                      <div className="pt-4">
                        <ResponsiveContainer width="100%" height={400}>
                          <LineChart data={usageMetricsWeekly}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="avgDailyUse" stroke="#4ade80" name="Avg Daily Use Time" />
                            <Line type="monotone" dataKey="avgSession" stroke="#2dd4bf" name="Avg Session Length" />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </TabsContent>

                    <TabsContent value="daily">
                      <div className="pt-4">
                        <ResponsiveContainer width="100%" height={400}>
                          <LineChart data={usageMetricsDaily}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="avgDailyUse" stroke="#4ade80" name="Avg Daily Use Time" />
                            <Line type="monotone" dataKey="avgSession" stroke="#2dd4bf" name="Avg Session Length" />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardHeader>
              </Card>
            </div>
          </TabsContent>

          {/* Moderator Tab */}
          <TabsContent value="moderator">
            <div className="space-y-6">
              {/* Reported Comments Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Reported Comments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <table className="w-full">
                      <thead className="bg-green-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-sm font-medium text-green-800">User</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-green-800">Comment</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-green-800">Reported By</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-green-800">Reason</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-green-800">Date</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-green-800">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {reportedComments.map((report) => (
                          <React.Fragment key={report.id}>
                            <tr 
                              className="hover:bg-green-50 cursor-pointer"
                              onClick={() => toggleComment(report.id)}
                            >
                              <td className="px-4 py-3 text-sm">{report.user}</td>
                              <td className="px-4 py-3 text-sm">
                                {report.comment.length                                  ? `${report.comment.substring(0, 50)}...` 
                                  : report.comment}
                              </td>
                              <td className="px-4 py-3 text-sm">{report.reportedBy}</td>
                              <td className="px-4 py-3 text-sm">{report.reason}</td>
                              <td className="px-4 py-3 text-sm">{report.date}</td>
                              <td className="px-4 py-3 text-sm">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleRemoveComment(report.id);
                                  }}
                                  className="rounded bg-red-500 px-3 py-1 text-xs text-white hover:bg-red-600 transition-colors"
                                >
                                  Remove Comment
                                </button>
                              </td>
                            </tr>
                            {expandedComment === report.id && (
                              <tr className="bg-green-50">
                                <td colSpan={6} className="px-4 py-4">
                                  <div className="space-y-4">
                                    <div>
                                      <h4 className="font-semibold text-sm text-green-800">Full Comment</h4>
                                      <p className="text-sm mt-1 whitespace-pre-wrap">{report.comment}</p>
                                    </div>
                                    <div>
                                      <h4 className="font-semibold text-sm text-green-800">Report Reason</h4>
                                      <p className="text-sm mt-1">{report.reason}</p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            )}
                          </React.Fragment>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* Ticket Feedback Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Ticket Feedback</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <table className="w-full">
                      <thead className="bg-green-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-sm font-medium text-green-800">Ticket #</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-green-800">Date</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-green-800">User</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-green-800">Subject</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-green-800">Message</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-green-800">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {ticketFeedback.map((ticket) => (
                          <React.Fragment key={ticket.ticketId}>
                            <tr 
                              className="hover:bg-green-50 cursor-pointer"
                              onClick={() => toggleTicket(ticket.ticketId)}
                            >
                              <td className="px-4 py-3 text-sm font-medium">
                                {ticket.ticketId}
                              </td>
                              <td className="px-4 py-3 text-sm">
                                {ticket.date}
                              </td>
                              <td className="px-4 py-3 text-sm">
                                {ticket.user}
                              </td>
                              <td className="px-4 py-3 text-sm">
                                {ticket.subject}
                              </td>
                              <td className="px-4 py-3 text-sm">
                                {ticket.message.length > 50 
                                  ? `${ticket.message.substring(0, 50)}...` 
                                  : ticket.message}
                              </td>
                              <td className="px-4 py-3 text-sm">
                                <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium
                                  ${ticket.status === 'Resolved' 
                                    ? 'bg-green-100 text-green-700' 
                                    : 'bg-yellow-100 text-yellow-700'
                                  }`}>
                                  {ticket.status}
                                </span>
                              </td>
                            </tr>
                            {expandedTicket === ticket.ticketId && (
                              <tr className="bg-green-50">
                                <td colSpan={6} className="px-4 py-4">
                                  <div className="space-y-4">
                                    <div>
                                      <h4 className="font-semibold text-sm text-green-800">Full Message</h4>
                                      <p className="text-sm mt-1 whitespace-pre-wrap">{ticket.message}</p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                      <div>
                                        <h4 className="font-semibold text-sm text-green-800">Priority Level</h4>
                                        <p className="text-sm mt-1">{ticket.priority}</p>
                                      </div>
                                      <div>
                                        <h4 className="font-semibold text-sm text-green-800">Status</h4>
                                        <p className="text-sm mt-1">{ticket.status}</p>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            )}
                          </React.Fragment>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Complete Data Tab */}
          <TabsContent value="completeData">
            <div className="pt-4">
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={completeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" tickFormatter={(date) => date.substring(5)} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="likes" stroke="#8884d8" name="Likes" />
                  <Line type="monotone" dataKey="shares" stroke="#82ca9d" name="Shares" />
                  <Line type="monotone" dataKey="comments" stroke="#ffc658" name="Comments" />
                  <Line type="monotone" dataKey="userCount" stroke="#ff7300" name="User Count" />
                  <Line type="monotone" dataKey="eventCount" stroke="#387908" name="Event Count" />
                  <Line type="monotone" dataKey="registeredUserCount" stroke="#ff0000" name="Registered Users" />
                  <Line type="monotone" dataKey="eventLikes" stroke="#00c49f" name="Event Likes" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
