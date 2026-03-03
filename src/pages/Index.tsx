import { Search, SlidersHorizontal, MapPin, X, ChevronDown, Grid3X3, List, Filter, Calendar, Tag, Users, Globe, ArrowUpDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

const FilterExample1 = () => (
  <div className="rounded-xl border border-border bg-card overflow-hidden">
    <div className="p-5 border-b border-border">
      <h3 className="text-lg font-display font-semibold">Exemplo 1 — Sidebar com Tags</h3>
      <p className="text-sm text-muted-foreground mt-1">Filtros laterais com chips selecionáveis</p>
    </div>
    <div className="flex">
      {/* Sidebar */}
      <div className="w-72 border-r border-border p-5 space-y-6 bg-muted/30">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-card border border-border text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            placeholder="Buscar mapeamento..."
          />
        </div>

        {/* Category */}
        <div>
          <h4 className="text-xs font-display font-semibold uppercase tracking-wider text-muted-foreground mb-3">Eixo temático</h4>
          <div className="space-y-2">
            {[
              { label: "Territórios Negros Urbanos", color: "bg-nix-purple", count: 142 },
              { label: "Cultura de Comida de Rua", color: "bg-nix-orange", count: 89 },
              { label: "Coletivos LGBTQIA+", color: "bg-nix-pink", count: 67 },
              { label: "Eventos LGBTQIA+", color: "bg-nix-teal", count: 34 },
            ].map((item) => (
              <label key={item.label} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted cursor-pointer transition-colors">
                <Checkbox />
                <span className={`w-2.5 h-2.5 rounded-full ${item.color} shrink-0`} />
                <span className="text-sm flex-1">{item.label}</span>
                <span className="text-xs text-muted-foreground">{item.count}</span>
              </label>
            ))}
          </div>
        </div>

        <Separator />

        {/* Region */}
        <div>
          <h4 className="text-xs font-display font-semibold uppercase tracking-wider text-muted-foreground mb-3">Região</h4>
          <div className="flex flex-wrap gap-2">
            {["Centro", "Zona Norte", "Zona Sul", "Zona Leste", "Zona Oeste"].map((r) => (
              <span key={r} className="px-3 py-1.5 rounded-full text-xs font-medium border border-border bg-card hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors">
                {r}
              </span>
            ))}
          </div>
        </div>

        <Separator />

        {/* Status */}
        <div>
          <h4 className="text-xs font-display font-semibold uppercase tracking-wider text-muted-foreground mb-3">Status</h4>
          <div className="space-y-2">
            {["Ativo", "Em revisão", "Pendente"].map((s) => (
              <label key={s} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted cursor-pointer transition-colors">
                <Checkbox />
                <span className="text-sm">{s}</span>
              </label>
            ))}
          </div>
        </div>

        <Button className="w-full" size="sm">Aplicar filtros</Button>
      </div>

      {/* Content */}
      <div className="flex-1 p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="gap-1">Territórios Negros <X className="h-3 w-3" /></Badge>
            <Badge variant="secondary" className="gap-1">Centro <X className="h-3 w-3" /></Badge>
            <button className="text-xs text-primary hover:underline">Limpar tudo</button>
          </div>
          <span className="text-sm text-muted-foreground">332 resultados</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[1,2,3,4].map(i => (
            <div key={i} className="h-28 rounded-lg bg-muted/50 border border-border animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  </div>
);

const FilterExample2 = () => (
  <div className="rounded-xl border border-border bg-card overflow-hidden">
    <div className="p-5 border-b border-border">
      <h3 className="text-lg font-display font-semibold">Exemplo 2 — Barra Horizontal</h3>
      <p className="text-sm text-muted-foreground mt-1">Filtros em linha com dropdowns e busca integrada</p>
    </div>
    <div className="p-5 space-y-4">
      {/* Search bar */}
      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-muted/50 border border-border text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 font-body"
            placeholder="Buscar por nome, endereço ou palavra-chave..."
          />
        </div>
        <Button size="lg" className="px-6 rounded-xl gap-2">
          <Search className="h-4 w-4" /> Buscar
        </Button>
      </div>

      {/* Filter row */}
      <div className="flex items-center gap-3 flex-wrap">
        <span className="text-sm font-medium text-muted-foreground flex items-center gap-1.5">
          <Filter className="h-4 w-4" /> Filtros:
        </span>
        {[
          { label: "Eixo temático", icon: Tag },
          { label: "Região", icon: MapPin },
          { label: "Período", icon: Calendar },
          { label: "Público-alvo", icon: Users },
        ].map(({ label, icon: Icon }) => (
          <button key={label} className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card hover:bg-muted text-sm font-medium transition-colors">
            <Icon className="h-4 w-4 text-muted-foreground" />
            {label}
            <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
          </button>
        ))}
        <Separator orientation="vertical" className="h-6" />
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-dashed border-primary/40 text-primary text-sm font-medium hover:bg-primary/5 transition-colors">
          <SlidersHorizontal className="h-4 w-4" /> Mais filtros
        </button>
      </div>

      {/* Active filters */}
      <div className="flex items-center gap-2">
        <span className="text-xs text-muted-foreground">Ativos:</span>
        <Badge className="bg-nix-purple text-nix-purple-foreground gap-1 text-xs">Coletivos LGBTQIA+ <X className="h-3 w-3" /></Badge>
        <Badge className="bg-nix-teal text-nix-teal-foreground gap-1 text-xs">Zona Sul <X className="h-3 w-3" /></Badge>
      </div>

      {/* Sort + view toggle */}
      <div className="flex items-center justify-between pt-2 border-t border-border">
        <span className="text-sm text-muted-foreground">67 resultados encontrados</span>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
            <ArrowUpDown className="h-4 w-4" /> Ordenar por
          </button>
          <div className="flex border border-border rounded-lg overflow-hidden">
            <button className="p-2 bg-primary text-primary-foreground"><Grid3X3 className="h-4 w-4" /></button>
            <button className="p-2 hover:bg-muted text-muted-foreground"><List className="h-4 w-4" /></button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {[1,2,3].map(i => (
          <div key={i} className="h-24 rounded-lg bg-muted/50 border border-border animate-pulse" />
        ))}
      </div>
    </div>
  </div>
);

const FilterExample3 = () => (
  <div className="rounded-xl border border-border bg-card overflow-hidden">
    <div className="p-5 border-b border-border">
      <h3 className="text-lg font-display font-semibold">Exemplo 3 — Cards de Categoria</h3>
      <p className="text-sm text-muted-foreground mt-1">Seleção visual por cards com busca contextual</p>
    </div>
    <div className="p-5 space-y-5">
      {/* Category cards */}
      <div className="grid grid-cols-4 gap-3">
        {[
          { label: "Territórios Negros", sub: "142 registros", color: "border-nix-purple bg-nix-purple/5", dot: "bg-nix-purple", active: true },
          { label: "Comida de Rua", sub: "89 registros", color: "border-border bg-card", dot: "bg-nix-orange", active: false },
          { label: "Coletivos LGBTQIA+", sub: "67 registros", color: "border-border bg-card", dot: "bg-nix-pink", active: false },
          { label: "Eventos LGBTQIA+", sub: "34 registros", color: "border-border bg-card", dot: "bg-nix-teal", active: false },
        ].map((c) => (
          <button key={c.label} className={`p-4 rounded-xl border-2 text-left transition-all hover:shadow-md ${c.color} ${c.active ? "ring-2 ring-nix-purple/30 shadow-md" : ""}`}>
            <div className={`w-3 h-3 rounded-full ${c.dot} mb-3`} />
            <p className="font-display font-semibold text-sm">{c.label}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{c.sub}</p>
          </button>
        ))}
      </div>

      {/* Search + inline filters */}
      <div className="bg-muted/40 rounded-xl p-4 space-y-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-card border border-border text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-nix-purple/30"
            placeholder="Buscar em Territórios Negros Urbanos..."
          />
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs text-muted-foreground font-medium">Filtrar por:</span>
          {["Região", "Tipo", "Ano", "Status"].map((f) => (
            <button key={f} className="px-3 py-1 rounded-full text-xs border border-border bg-card hover:bg-nix-purple hover:text-nix-purple-foreground hover:border-nix-purple transition-colors">
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {[1,2,3,4,5,6].map(i => (
          <div key={i} className="h-20 rounded-lg bg-muted/50 border border-border animate-pulse" />
        ))}
      </div>
    </div>
  </div>
);

const FilterExample4 = () => (
  <div className="rounded-xl border border-border bg-card overflow-hidden">
    <div className="p-5 border-b border-border">
      <h3 className="text-lg font-display font-semibold">Exemplo 4 — Busca Expandida com Abas</h3>
      <p className="text-sm text-muted-foreground mt-1">Busca central com abas por eixo e filtros avançados</p>
    </div>
    <div className="p-5 space-y-5">
      {/* Hero search */}
      <div className="bg-gradient-to-br from-primary/10 via-nix-purple/5 to-nix-teal/10 rounded-2xl p-8 text-center space-y-4">
        <h4 className="font-display text-xl font-bold">Explore os Mapeamentos</h4>
        <p className="text-sm text-muted-foreground">Pesquise em todas as bases de dados da Nix</p>
        <div className="max-w-lg mx-auto relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            className="w-full pl-12 pr-32 py-4 rounded-2xl bg-card border border-border shadow-lg text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            placeholder="O que você procura?"
          />
          <Button size="sm" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl px-5">
            Buscar
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 border-b border-border">
        {[
          { label: "Todos", count: 332, active: true },
          { label: "Territórios Negros", count: 142, active: false },
          { label: "Comida de Rua", count: 89, active: false },
          { label: "LGBTQIA+", count: 101, active: false },
        ].map((tab) => (
          <button key={tab.label} className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${tab.active ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`}>
            {tab.label} <span className="ml-1 text-xs opacity-60">({tab.count})</span>
          </button>
        ))}
      </div>

      {/* Compact filters */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {["São Paulo", "Rio de Janeiro", "Salvador"].map((c) => (
            <Badge key={c} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
              <MapPin className="h-3 w-3 mr-1" /> {c}
            </Badge>
          ))}
          <button className="text-xs text-primary font-medium hover:underline">+ Mais cidades</button>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg border border-border hover:bg-muted">
            <Globe className="h-4 w-4" /> Mapa
          </button>
          <button className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg border border-border hover:bg-muted">
            <SlidersHorizontal className="h-4 w-4" /> Avançado
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {[1,2,3].map(i => (
          <div key={i} className="h-16 rounded-lg bg-muted/50 border border-border animate-pulse" />
        ))}
      </div>
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 py-10 space-y-10">
        <div>
          <h1 className="text-3xl font-display font-bold">Plataforma de Mapeamentos — Nix</h1>
          <p className="text-muted-foreground mt-2">4 exemplos de design para filtros e busca</p>
        </div>
        <FilterExample1 />
        <FilterExample2 />
        <FilterExample3 />
        <FilterExample4 />
      </div>
    </div>
  );
};

export default Index;
