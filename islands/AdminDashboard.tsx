import { useState, useEffect } from "preact/hooks";

interface Metric {
  value: string;
  change: string;
  trend: "up" | "down";
}

interface ChartData {
  month: string;
  revenue: number;
  orders: number;
}

interface Activity {
  action: string;
  details: string;
  time: string;
  type: "order" | "customer" | "payment" | "inventory";
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("analytics");
  const [selectedMetric, setSelectedMetric] = useState("revenue");
  const [isLive, setIsLive] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());

  const metrics: Record<string, Metric> = {
    revenue: { value: "$124,567", change: "+12.5%", trend: "up" },
    orders: { value: "1,234", change: "+8.2%", trend: "up" },
    customers: { value: "5,678", change: "+15.3%", trend: "up" },
    conversion: { value: "3.2%", change: "+0.8%", trend: "up" }
  };

  const chartData: ChartData[] = [
    { month: "Jan", revenue: 85000, orders: 1200 },
    { month: "Feb", revenue: 92000, orders: 1350 },
    { month: "Mar", revenue: 98000, orders: 1420 },
    { month: "Apr", revenue: 105000, orders: 1580 },
    { month: "May", revenue: 112000, orders: 1650 },
    { month: "Jun", revenue: 124567, orders: 1850 }
  ];

  const activities: Activity[] = [
    { action: "New order placed", details: "Order #1234 - $299.99", time: "2 min ago", type: "order" },
    { action: "Customer registered", details: "john.doe@example.com", time: "5 min ago", type: "customer" },
    { action: "Payment processed", details: "Order #1233 - $149.99", time: "8 min ago", type: "payment" },
    { action: "Inventory updated", details: "Product XYZ - 50 units", time: "12 min ago", type: "inventory" }
  ];

  // Update time every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  // Simulate live data updates
  useEffect(() => {
    if (!isLive) return;
    
    const interval = setInterval(() => {
      // Simulate random activity updates
      const randomActivity = activities[Math.floor(Math.random() * activities.length)];
      console.log("Live update:", randomActivity.action);
    }, 10000);
    
    return () => clearInterval(interval);
  }, [isLive]);

  const getActivityIcon = (type: Activity["type"]) => {
    switch (type) {
      case "order": return "🛒";
      case "customer": return "👤";
      case "payment": return "💳";
      case "inventory": return "📦";
      default: return "📋";
    }
  };

  const getActivityColor = (type: Activity["type"]) => {
    switch (type) {
      case "order": return "bg-blue-100 text-blue-800";
      case "customer": return "bg-green-100 text-green-800";
      case "payment": return "bg-purple-100 text-purple-800";
      case "inventory": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  // Sample data for different tabs
  const ordersData = [
    { id: "#1234", customer: "John Doe", amount: "$299.99", status: "Processing", date: "2024-01-15" },
    { id: "#1235", customer: "Jane Smith", amount: "$149.99", status: "Shipped", date: "2024-01-14" },
    { id: "#1236", customer: "Mike Johnson", amount: "$89.99", status: "Delivered", date: "2024-01-13" },
    { id: "#1237", customer: "Sarah Wilson", amount: "$199.99", status: "Pending", date: "2024-01-12" }
  ];

  const customersData = [
    { id: "C001", name: "John Doe", email: "john@example.com", orders: 5, totalSpent: "$1,299.99", status: "Active" },
    { id: "C002", name: "Jane Smith", email: "jane@example.com", orders: 3, totalSpent: "$449.99", status: "Active" },
    { id: "C003", name: "Mike Johnson", email: "mike@example.com", orders: 8, totalSpent: "$2,199.99", status: "VIP" },
    { id: "C004", name: "Sarah Wilson", email: "sarah@example.com", orders: 2, totalSpent: "$199.99", status: "Active" }
  ];

  const inventoryData = [
    { id: "P001", name: "Premium Widget", sku: "WID-001", stock: 150, price: "$29.99", status: "In Stock" },
    { id: "P002", name: "Deluxe Gadget", sku: "GAD-002", stock: 25, price: "$49.99", status: "Low Stock" },
    { id: "P003", name: "Super Tool", sku: "TOOL-003", stock: 0, price: "$79.99", status: "Out of Stock" },
    { id: "P004", name: "Basic Kit", sku: "KIT-004", stock: 300, price: "$19.99", status: "In Stock" }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "processing": return "bg-yellow-100 text-yellow-800";
      case "shipped": return "bg-blue-100 text-blue-800";
      case "delivered": return "bg-green-100 text-green-800";
      case "pending": return "bg-gray-100 text-gray-800";
      case "active": return "bg-green-100 text-green-800";
      case "vip": return "bg-purple-100 text-purple-800";
      case "in stock": return "bg-green-100 text-green-800";
      case "low stock": return "bg-yellow-100 text-yellow-800";
      case "out of stock": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "orders":
        return (
          <div class="space-y-6">
            <div class="flex items-center justify-between">
              <h4 class="text-lg font-semibold">Recent Orders</h4>
              <button class="text-sm text-primary-600 hover:text-primary-700 font-medium">
                View All Orders
              </button>
            </div>
            <div class="space-y-3">
              {ordersData.map((order) => (
                <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:shadow-md transition-all duration-200">
                  <div class="flex items-center space-x-4">
                    <div class="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                      <span class="text-primary-600 font-semibold">📦</span>
                    </div>
                    <div>
                      <p class="font-medium text-gray-900">{order.id}</p>
                      <p class="text-sm text-gray-600">{order.customer}</p>
                    </div>
                  </div>
                  <div class="text-right">
                    <p class="font-semibold text-gray-900">{order.amount}</p>
                    <span class={`text-xs px-2 py-1 rounded-full ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "customers":
        return (
          <div class="space-y-6">
            <div class="flex items-center justify-between">
              <h4 class="text-lg font-semibold">Customer Overview</h4>
              <button class="text-sm text-primary-600 hover:text-primary-700 font-medium">
                View All Customers
              </button>
            </div>
            <div class="grid md:grid-cols-2 gap-4">
              {customersData.map((customer) => (
                <div class="p-4 bg-gray-50 rounded-lg hover:shadow-md transition-all duration-200">
                  <div class="flex items-center space-x-3 mb-3">
                    <div class="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                      <span class="text-primary-600 font-semibold text-sm">
                        {customer.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p class="font-medium text-gray-900">{customer.name}</p>
                      <p class="text-sm text-gray-600">{customer.email}</p>
                    </div>
                  </div>
                  <div class="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p class="text-gray-600">Orders</p>
                      <p class="font-semibold">{customer.orders}</p>
                    </div>
                    <div>
                      <p class="text-gray-600">Total Spent</p>
                      <p class="font-semibold">{customer.totalSpent}</p>
                    </div>
                  </div>
                  <div class="mt-3">
                    <span class={`text-xs px-2 py-1 rounded-full ${getStatusColor(customer.status)}`}>
                      {customer.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "inventory":
        return (
          <div class="space-y-6">
            <div class="flex items-center justify-between">
              <h4 class="text-lg font-semibold">Inventory Management</h4>
              <button class="text-sm text-primary-600 hover:text-primary-700 font-medium">
                Manage Inventory
              </button>
            </div>
            <div class="space-y-3">
              {inventoryData.map((item) => (
                <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:shadow-md transition-all duration-200">
                  <div class="flex items-center space-x-4">
                    <div class="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                      <span class="text-primary-600 font-semibold">📦</span>
                    </div>
                    <div>
                      <p class="font-medium text-gray-900">{item.name}</p>
                      <p class="text-sm text-gray-600">SKU: {item.sku}</p>
                    </div>
                  </div>
                  <div class="text-right">
                    <p class="font-semibold text-gray-900">{item.price}</p>
                    <p class="text-sm text-gray-600">Stock: {item.stock}</p>
                    <span class={`text-xs px-2 py-1 rounded-full ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default: // analytics
        return (
          <>
            {/* Metrics Grid */}
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {Object.entries(metrics).map(([key, metric]) => (
                <div
                  onClick={() => setSelectedMetric(key)}
                  class={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedMetric === key
                      ? "border-primary-500 bg-primary-50 transform scale-105"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div class="flex items-center justify-between">
                    <div>
                      <p class="text-sm text-gray-600 capitalize">{key}</p>
                      <p class="text-2xl font-bold text-gray-900">{metric.value}</p>
                    </div>
                    <div class={`text-sm font-medium flex items-center space-x-1 ${
                      metric.trend === "up" ? "text-green-600" : "text-red-600"
                    }`}>
                      <span>{metric.trend === "up" ? "↗" : "↘"}</span>
                      <span>{metric.change}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Chart */}
            <div class="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 class="text-lg font-semibold mb-4">Revenue & Orders Trend</h4>
              <div class="flex items-end space-x-2 h-32">
                {chartData.map((data, index) => (
                  <div class="flex-1 flex flex-col items-center group">
                    <div 
                      class="w-full bg-primary-500 rounded-t-sm mb-2 transition-all duration-300 hover:bg-primary-600 hover:scale-110 cursor-pointer relative"
                      style={{ height: `${(data.revenue / 130000) * 100}%` }}
                      title={`${data.month}: $${data.revenue.toLocaleString()}`}
                    >
                      <div class="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        ${data.revenue.toLocaleString()}
                      </div>
                    </div>
                    <span class="text-xs text-gray-600">{data.month}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <h4 class="text-lg font-semibold">Recent Activity</h4>
                <button 
                  onClick={() => window.location.reload()}
                  class="text-sm text-primary-600 hover:text-primary-700 font-medium"
                >
                  Refresh
                </button>
              </div>
              {activities.map((activity, index) => (
                <div 
                  class={`flex items-center justify-between p-3 rounded-lg transition-all duration-300 hover:shadow-md cursor-pointer ${
                    index === 0 ? "bg-blue-50 border-l-4 border-blue-500" : "bg-gray-50"
                  }`}
                >
                  <div class="flex items-center space-x-3">
                    <span class="text-lg">{getActivityIcon(activity.type)}</span>
                    <div>
                      <p class="font-medium text-gray-900">{activity.action}</p>
                      <p class="text-sm text-gray-600">{activity.details}</p>
                    </div>
                  </div>
                  <div class="flex items-center space-x-2">
                    <span class={`text-xs px-2 py-1 rounded-full ${getActivityColor(activity.type)}`}>
                      {activity.type}
                    </span>
                    <span class="text-xs text-gray-500">{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        );
    }
  };

  return (
    <div class="bg-white rounded-2xl shadow-2xl p-6 max-w-4xl mx-auto">
      {/* Dashboard Header */}
      <div class="flex items-center justify-between mb-8">
        <div>
          <h3 class="text-2xl font-bold text-gray-900">Admin Dashboard</h3>
          <p class="text-gray-600">Real-time insights and analytics</p>
          <p class="text-sm text-gray-500 mt-1">
            Last updated: {currentTime.toLocaleTimeString()}
          </p>
        </div>
        <div class="flex items-center space-x-4">
          <button
            onClick={() => setIsLive(!isLive)}
            class={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              isLive 
                ? "bg-green-100 text-green-700 hover:bg-green-200" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <div class={`w-2 h-2 rounded-full ${isLive ? "bg-green-500 animate-pulse" : "bg-gray-400"}`}></div>
            <span>{isLive ? "Live" : "Paused"}</span>
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div class="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg">
        {["analytics", "orders", "customers", "inventory"].map((tab) => (
          <button
            onClick={() => setActiveTab(tab)}
            class={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              activeTab === tab
                ? "bg-white text-primary-600 shadow-sm transform scale-105"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {renderTabContent()}

      {/* Quick Actions */}
      <div class="mt-8 pt-6 border-t border-gray-200">
        <h4 class="text-lg font-semibold mb-4">Quick Actions</h4>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "New Order", icon: "➕", color: "bg-blue-500 hover:bg-blue-600" },
            { label: "Add Customer", icon: "👤", color: "bg-green-500 hover:bg-green-600" },
            { label: "Update Stock", icon: "📦", color: "bg-orange-500 hover:bg-orange-600" },
            { label: "View Reports", icon: "📊", color: "bg-purple-500 hover:bg-purple-600" }
          ].map((action) => (
            <button class={`${action.color} text-white p-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1`}>
              <div class="text-xl mb-1">{action.icon}</div>
              <div class="text-sm">{action.label}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
