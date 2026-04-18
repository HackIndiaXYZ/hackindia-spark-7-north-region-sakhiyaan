import { NavLink, Outlet, useLocation } from "react-router";
import { Compass, Sparkles } from "lucide-react";
import { categories } from "../config/categories";
import { cn } from "../components/ui/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "../components/ui/sidebar";

export function AppLayout() {
  const location = useLocation();
  const activeCategory =
    categories.find((category) =>
      category.path === "/"
        ? location.pathname === category.path
        : location.pathname.startsWith(category.path),
    ) ?? categories[0];

  return (
    <SidebarProvider defaultOpen>
      <Sidebar
        collapsible="icon"
        className="border-r border-white/40 bg-[linear-gradient(180deg,rgba(255,249,242,0.96)_0%,rgba(247,239,227,0.96)_48%,rgba(233,246,242,0.92)_100%)] shadow-[0_0_40px_rgba(17,74,86,0.08)] backdrop-blur-xl"
      >
        <SidebarHeader className="border-b border-[#eadbc7]/80 px-4 py-5">
          <NavLink to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0d7c74] via-[#1b948a] to-[#7fd2bf] text-white shadow-[0_14px_30px_rgba(13,124,116,0.28)]">
              <Sparkles className="h-5 w-5" />
            </div>
            <div className="min-w-0 group-data-[collapsible=icon]:hidden">
              {/* <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8d7455]">Shakti Network</p> */}
              <h1 className="text-lg font-bold text-[#17363f]">Shakti Network</h1>
              <p className="mt-1 text-sm text-[#6c7a7c]">Support, skills, and community</p>
            </div>
          </NavLink>
        </SidebarHeader>

        <SidebarContent className="px-3 py-4">
          <SidebarGroup className="gap-2">
            <SidebarGroupLabel className="px-2 text-[#8d7455]">Categories</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="gap-2">
                {categories.map((category) => {
                  const Icon = category.icon;
                  const isActive =
                    category.path === "/"
                      ? location.pathname === category.path
                      : location.pathname.startsWith(category.path);

                  return (
                    <SidebarMenuItem key={category.id}>
                      <SidebarMenuButton
                        asChild
                        isActive={isActive}
                        tooltip={category.title}
                        className="h-auto rounded-2xl border border-transparent px-3 py-3 text-[#17363f] shadow-none transition-all duration-200 hover:border-white/60 hover:bg-white/80 hover:shadow-[0_8px_24px_rgba(17,74,86,0.08)] data-[active=true]:border-[#0d7c74]/10 data-[active=true]:bg-gradient-to-r data-[active=true]:from-[#0d7c74] data-[active=true]:to-[#48ad97] data-[active=true]:text-white data-[active=true]:shadow-[0_16px_30px_rgba(13,124,116,0.24)]"
                      >
                        <NavLink to={category.path} className="flex items-center gap-3">
                          <span
                            className={cn(
                              "flex h-10 w-10 items-center justify-center rounded-2xl transition-colors",
                              isActive ? "bg-white/20 text-white" : "bg-white/75 text-[#0d7c74]",
                            )}
                          >
                            <Icon className="h-4 w-4" />
                          </span>
                          <span className="flex min-w-0 flex-1 items-center justify-between gap-2 group-data-[collapsible=icon]:hidden">
                            <span className="truncate font-semibold">{category.title}</span>
                            {isActive ? <span className="h-2.5 w-2.5 rounded-full bg-white/90" /> : null}
                          </span>
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="border-t border-[#eadbc7]/80 px-4 py-4 group-data-[collapsible=icon]:hidden">
          <div className="rounded-[1.75rem] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.78),rgba(239,249,246,0.88))] p-4 text-sm text-[#4b5f63] shadow-[0_10px_30px_rgba(17,74,86,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8d7455]">Current view</p>
            <p className="mt-2 text-base font-bold text-[#17363f]">{activeCategory.title}</p>
          </div>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset className="bg-transparent">
        <div className="pointer-events-none fixed left-4 top-4 z-40 md:hidden">
          <SidebarTrigger className="pointer-events-auto h-11 w-11 rounded-full border border-[#eadbc7] bg-white/90 text-[#17363f] shadow-lg backdrop-blur" />
        </div>
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
}
